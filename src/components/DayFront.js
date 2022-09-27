import dayjs from 'dayjs';
import React, { useContext } from 'react'
import { MonthContext, HolidayNumWeekContext, TempHolidayContext, TempDayContext } from '../Calendar';

export const DayFront = (props) => {
    const day = props.day;
    const [changeMonth, setChangeMonth] = useContext(MonthContext);
    const [holidayNumWeek, setHolidayNumWeek] = useContext(HolidayNumWeekContext);
    const [tempHoliday, setTempHoliday] = useContext(TempHolidayContext);
    const [tempDay, setTempDay] = useContext(TempDayContext);

    const holiday = props.holiday;
    const holidayWeek = props.holidayWeek;
    const firstWeek = dayjs(changeMonth).startOf('month');
    const lastWeek = dayjs(changeMonth).endOf('month');

    var checkHoliday = false;
    var checkHolidayWeek = false;
    var checkTempHoliday = false;
    var checkTempDay = false;
    var holidayTitle = "";
    
    // 祝日
    if(holiday && props.holidayBoolean){
        holiday.map(json => {
            if(day.month() == dayjs(json.date).month() && day.date() == dayjs(json.date).date() ){
                checkHoliday = true;
                holidayTitle = json.title;
                return;
            }
        });
    }

    // 第○の○曜日の定休日
    if(holidayNumWeek.length > 0){
        let n = 0;
        let w = 0;
        holidayNumWeek.map((d) => {
            switch(Object.keys(d)[0]){
                case 'n1':
                    n = 0;
                    break;
                case 'n2':
                    n = 1;
                    break;
                case 'n3':
                    n = 2;
                    break;
                case 'n4':
                    n = 3;
                    break;
                case 'n5':
                    n = 4;
                    break;
                case 'n-end':
                    n = 5;
                    break;
            }
            switch(Object.values(d)[0]){
                case 'Sun':
                    w = 0;
                    break;
                case 'Mon':
                    w = 1;
                    break;
                case 'Tue':
                    w = 2;
                    break;
                case 'Wed':
                    w = 3;
                    break;
                case 'Thu':
                    w = 4;
                    break;
                case 'Fri':
                    w = 5;
                    break;
                case 'Sat':
                    w = 6;
                    break;
                default:
            }
            if(n == 5){
                if(w > lastWeek.day()){
                    let targetDay = lastWeek.subtract(1, 'w').add(w - lastWeek.day(),'d');
                    if(day.month() == dayjs(targetDay).month() && day.date() == dayjs(targetDay).date() ){
                        checkHolidayWeek = true;
                    }
                }else if(w == lastWeek.day()){
                    if(day.month() == dayjs(lastWeek).month() && day.date() == dayjs(lastWeek).date() ){
                        checkHolidayWeek = true;
                    }
                }else{
                    let targetDay = lastWeek.subtract(lastWeek.day() - w, 'd');
                    if(day.month() == dayjs(targetDay).month() && day.date() == dayjs(targetDay).date() ){
                        checkHolidayWeek = true;
                    }
                }
            }else{
                if(w >= firstWeek.day()){
                    let targetDay = firstWeek.add(w - firstWeek.day(),'d').add(n , 'w');
                    if(day.month() == dayjs(targetDay).month() && day.date() == dayjs(targetDay).date() ){
                        checkHolidayWeek = true;
                    }
                }else{
                    let targetDay = firstWeek.add(7 - (firstWeek.day() - w),'d').add(n , 'w');
                    if(day.month() == dayjs(targetDay).month() && day.date() == dayjs(targetDay).date() ){
                        checkHolidayWeek = true;
                    }
                }
            }
        });
    }

    // 毎週○曜日の定休日
    if(holidayWeek){
        let w = "";
        switch(day.day()){
            case 0:
                w = 'Sun';
                break;
            case 1:
                w = 'Mon';
                break;
            case 2:
                w = 'Tue';
                break;
            case 3:
                w = 'Wed';
                break;
            case 4:
                w = 'Thu';
                break;
            case 5:
                w = 'Fri';
                break;
            case 6:
                w = 'Sat';
                break;
            default:
        }
        if(holidayWeek.includes(w)){
            checkHolidayWeek = true;
        }
    }

    // 臨時休業日
    if(tempHoliday){
        tempHoliday.map((elm) => {
            if(day.month() == dayjs(elm).month() && day.date() == dayjs(elm).date() ){
                checkHoliday = true;
                checkTempHoliday = true;
            }
        });
    }

    // 臨時営業日
    if(tempDay){
        tempDay.map((elm) => {
            if(day.month() == dayjs(elm).month() && day.date() == dayjs(elm).date() ){
                checkTempDay = true;
            }
        });
    }


    // 今月の日付はtrue
    const getCurrentMonth = () => {
        if(day.month() != changeMonth.month()){
            return true;
        }
    };

    // 今日の日付はtrue
    const getCurrentDay = () => {
        if(day.month() == dayjs().month() && day.date() == dayjs().date() ){
            return true;
        }
    }

    return (
        <React.Fragment>
            <td className={`${getCurrentDay() ? 'today ': ''}${getCurrentMonth() ? 'disabled': ''}${checkHoliday ? ' holiday': ''}${checkHolidayWeek ? ' holiday-week': ''}${checkTempDay ? ' temp-day': ''}`}><span>{day.format("DD")}</span>{checkTempHoliday && !checkTempDay ? (<span className="title">臨時休業日</span>) : ""} {holidayTitle !=  "" && !checkTempDay ? (<span className='title'>{holidayTitle}</span>) : ""}</td>
        </React.Fragment>
    )
}
