<?php
class CreateAdminPage{

    public function __construct(){
        add_action('admin_menu', function(){
            add_management_page(
                'カレンダー管理画面',
                'カレンダー設定',
                'manage_options',
                'calendar',
                [ $this, 'calendar_settings' ]
            );
        });
    }
    
    public function calendar_settings(){
        if ( !current_user_can( 'manage_options' ) )  {
            wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
        }

        $error_flag = false;
        $success_flag = false;

        // 祝日の表示・非表示
        if(!empty($_POST['holiday-boolean'])){
            update_option('custom-calendar-option-holiday-boolean', $_POST['holiday-boolean']);
        }
        
        // 祝日ファイルの設定
        if(!empty($_FILES['holiday']['tmp_name'])){
            if(is_uploaded_file($_FILES['holiday']['tmp_name'])){
                if(pathinfo($_FILES['holiday']['name'], PATHINFO_EXTENSION) === 'csv'){
                    $path = PLUGIN_PATH.'holiday.csv';
                    move_uploaded_file($_FILES['holiday']['tmp_name'],$path);
                    $success_flag = true;
                }else{
                    $error_flag = true;
                    $error_message = 'CSVファイルをアップロードしてください';
                }
            }
        }

        // 毎週の定休日の設定
        if(!empty($_POST['week'])){
            update_option('custom-calendar-option-holiday-week', $_POST['week']);
            $success_flag = true;
        }

        // 第○曜日の定休日の設定
        if(!empty($_POST['num'])){
            $num = array_filter($_POST['num'], function($elm){ return $elm != "";});
            $num = array_values($num);
            $week = array_filter($_POST['num-week'], function($elm){ return $elm != "";});
            $week = array_values($week);
            $num_week = array();
            foreach($num as $index => $value){
                if(!in_array(array($value => $week[$index]),$num_week)){
                    $num_week[] = array($value => $week[$index]);
                }
            }
            update_option('custom-calendar-option-holiday-num-week', $num_week);
            $success_flag = true;
        }

        // 臨時休業日
        if(!empty($_POST['temp-holiday'])){
            $temp_holiday = $_POST['temp-holiday'];
            $temp_holiday = array_unique($temp_holiday);
            $temp_holiday = array_filter($temp_holiday, function($elm){ return $elm != "";});
            $temp_holiday = array_values($temp_holiday);
            if(!empty($temp_holiday)){
                update_option('custom-calendar-option-temp-holiday', $temp_holiday);
            }else{
                update_option('custom-calendar-option-temp-holiday', "");
            }
            $success_flag = true;
        }

        // 臨時営業日
        if(!empty($_POST['temp-day'])){
            $temp_day = $_POST['temp-day'];
            $temp_day = array_unique($temp_day);
            $temp_day = array_filter($temp_day, function($elm){ return $elm != "";});
            $temp_day = array_values($temp_day);
            if(!empty($temp_day)){
                update_option('custom-calendar-option-temp-day', $temp_day);
            }else{
                update_option('custom-calendar-option-temp-day', "");
            }
            $success_flag = true;
        }

        // エラーメッセージ
        if($error_flag){
            echo '<hr><p class="error">'.$message.'</p><hr>';
        }

        // 完了メッセージ
        if($success_flag){
            echo '<hr><p class="success">設定を保存しました<p><hr>';
        }

        echo '<div id="calendar-settings"></div>';
    }
}
new CreateAdminPage();
?>