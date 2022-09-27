import { render } from '@wordpress/element';
import { useState, createContext, useEffect } from 'react';
import { getMonth } from './util';
import { MonthFront } from './components/MonthFront';
import dayjs from 'dayjs';

export const MonthContext = createContext();
export const HolidayWeekContext = createContext();
export const HolidayNumWeekContext = createContext();
export const TempHolidayContext = createContext();
export const TempDayContext = createContext();

export const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const [changeMonth, setChangeMonth] = useState(dayjs());
    const [holiday, setHoliday] = useState([]);
    const [holidayWeek, setHolidayWeek] = useState([]);
    const [holidayNumWeek, setHolidayNumWeek] = useState([]);
    const [holidayBoolean, setHolidayBoolean] = useState(true);
    const [tempDay, setTempDay] = useState([]);
    const [tempHoliday, setTempHoliday] = useState([]);

    useEffect(() => {
        setCurrentMonth(getMonth(changeMonth));

        fetch(`/wp-json/calendar/v0/holiday/?date=${changeMonth.year()}-${changeMonth.month() + 1}`)
        .then((res) => {
            res.json().then((data) => {
                setHoliday(data);
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }, [changeMonth]);

    useEffect(() => {
        fetch('/wp-json/calendar/v0/holiday-boolean/').then((res) => {
            return res.json().then((data) => {
                setHolidayBoolean(JSON.parse(data.toLowerCase()));
            });
        }).catch((error) => {
            console.log(error);
        });

        fetch('/wp-json/calendar/v0/holiday-week/').then((res) => {
            return res.json().then((data) => {
                setHolidayWeek([...holidayWeek,...data]);
            });
        }).catch((error) => {
            console.log(error);
        });

        fetch('/wp-json/calendar/v0/holiday-num-week/').then((res) => {
            return res.json().then((data) => {
                setHolidayNumWeek([...holidayNumWeek,...data]);
            });
        }).catch((error) => {
            console.log(error);
        });

        fetch('/wp-json/calendar/v0/temp-holiday/').then((res) => {
            return res.json().then((data) => {
                setTempHoliday([...tempHoliday,...data]);
            });
        }).catch((error) => {
            console.log(error);
        });

        fetch('/wp-json/calendar/v0/temp-day/').then((res) => {
            return res.json().then((data) => {
                setTempDay([...tempDay,...data]);
            });
        }).catch((error) => {
            console.log(error);
        });
    },[]);
    
    return (
        <div>
            <HolidayNumWeekContext.Provider value={[holidayNumWeek, setHolidayNumWeek]}>
                <TempDayContext.Provider value={[tempDay, setTempDay]}>
                    <TempHolidayContext.Provider value={[tempHoliday, setTempHoliday]}>
                        <MonthContext.Provider value={[changeMonth, setChangeMonth]}>
                            <MonthFront month={currentMonth} holiday={holiday} holidayWeek={holidayWeek} holidayBoolean={holidayBoolean}/>
                        </MonthContext.Provider>
                    </TempHolidayContext.Provider>
                </TempDayContext.Provider>
            </HolidayNumWeekContext.Provider>
        </div>
    );
}

export default { MonthContext, HolidayWeekContext, HolidayNumWeekContext, TempHolidayContext, TempDayContext};