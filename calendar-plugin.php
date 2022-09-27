<?php 

/*
Plugin Name: CUSTOM CALENDAR
Description: 営業日カレンダーを表示できるプラグインです
Author: World Utility co.,ltd
Author URI: https://worldutility.net/
Version: 1.0
*/

if ( ! defined( 'ABSPATH' ) ) exit;

define('PLUGIN_PATH', plugin_dir_path(__FILE__));
define('PLUGIN_URL', plugins_url('/', __FILE__));

require_once PLUGIN_PATH.'/classes/class-create-admin-menu.php';

add_action( 'wp_enqueue_scripts', function(){
    wp_enqueue_script('build-script', PLUGIN_URL.'/build/index.js', ['wp-element']);
    wp_enqueue_style('calendar-style', PLUGIN_URL.'/css/calendar.css');
});

add_action( 'admin_enqueue_scripts', function($hook_suffix){
    if($hook_suffix == 'tools_page_calendar'){
        wp_enqueue_script('build-script', PLUGIN_URL.'/build/index.js', ['wp-element']);
        wp_enqueue_style('calendar-admin-style', PLUGIN_URL.'/css/calendar-admin.css');
        wp_enqueue_style('calendar-style', PLUGIN_URL.'/css/calendar.css');
    }
});


// 祝日の表示・非表示を取得するAPIを登録
function add_rest_holiday_boolean_endpoint(){
    register_rest_route( 'calendar/v0', '/holiday-boolean', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'getHolidayBoolean',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'add_rest_holiday_boolean_endpoint');

function getHolidayBoolean(){
    if(get_option('custom-calendar-option-holiday-boolean')){
        $res = new WP_REST_Response(get_option('custom-calendar-option-holiday-boolean'));
        $res->set_status(200);
        return $res;
    }
}

// 祝日を取得するAPIを登録
function add_rest_holiday_endpoint(){
    register_rest_route( 'calendar/v0', '/holiday', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'getHolidays',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'add_rest_holiday_endpoint');

function getHolidays(){
    $csv_path = PLUGIN_PATH.'/holiday.csv';
    if(file_exists($csv_path)){
        $csv = file($csv_path);
        $csv_header = $csv[0]; 
        $csv_body = array_splice($csv, 1);
        foreach ($csv_body as $row) {
            $result[] = explode(',', $row);
        }
        if(!empty($_GET['date'])){
            $date = str_replace('-','\/',$_GET['date']);
            $date_result = array();
            foreach($result as $r){
                if(preg_grep('/'.$date.'/',$r)){
                    $key = ["date","title"];
                    $date_result[] = array_combine($key,$r);
                }
            }
            $res = new WP_REST_Response($date_result);
            $res->set_status(200);
            return $res;
        }
    }
}

// 毎週の定休日を取得するAPIを登録
function add_rest_holiday_week_endpoint(){
    register_rest_route( 'calendar/v0', '/holiday-week', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'getHolidayWeek',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'add_rest_holiday_week_endpoint');

function getHolidayWeek(){
    if(get_option('custom-calendar-option-holiday-week')){
        $res = new WP_REST_Response(get_option('custom-calendar-option-holiday-week'));
        $res->set_status(200);
        return $res;
    }
}

// 第○曜日の定休日を取得するAPIを登録
function add_rest_holiday_num_week_endpoint(){
    register_rest_route( 'calendar/v0', '/holiday-num-week', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'getHolidayNumWeek',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'add_rest_holiday_num_week_endpoint');

function getHolidayNumWeek(){
    if(get_option('custom-calendar-option-holiday-num-week')){
        $res = new WP_REST_Response(get_option('custom-calendar-option-holiday-num-week'));
        $res->set_status(200);
        return $res;
    }
}

// 臨時休業日を取得するAPIを登録
function add_rest_temp_holiday_endpoint(){
    register_rest_route( 'calendar/v0', '/temp-holiday', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'getTempHoliday',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'add_rest_temp_holiday_endpoint');

function getTempHoliday(){
    if(get_option('custom-calendar-option-temp-holiday')){
        $res = new WP_REST_Response(get_option('custom-calendar-option-temp-holiday'));
        $res->set_status(200);
        return $res;
    }
}

// 臨時営業日を取得するAPIを登録
function add_rest_temp_day_endpoint(){
    register_rest_route( 'calendar/v0', '/temp-day', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'getTempDay',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'add_rest_temp_day_endpoint');

function getTempDay(){
    if(get_option('custom-calendar-option-temp-day')){
        $res = new WP_REST_Response(get_option('custom-calendar-option-temp-day'));
        $res->set_status(200);
        return $res;
    }
}

function calendar_shortcode(){
    return '<div id="custom-calendar"></div>';
}
add_shortcode('custom-calendar','calendar_shortcode');

function pluginUninstall(){
    delete_option('custom-calendar-option-holiday-boolean');
    delete_option('custom-calendar-option-holiday-week');
    delete_option('custom-calendar-option-holiday-num-week');
    delete_option('custom-calendar-option-temp-holiday');
    delete_option('custom-calendar-option-temp-day');
}
register_uninstall_hook(__FILE__, 'pluginUninstall');

add_filter('plugin_action_links_'.plugin_basename(__FILE__), 'plugin_action_links');
function plugin_action_links($links){
    $url = '<a href="'.esc_url('tools.php?page=calendar').'">'.__('Settings').'</a>';
    array_unshift($links,$url);
    return $links;
}