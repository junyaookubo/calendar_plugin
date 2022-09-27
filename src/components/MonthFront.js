import React from 'react'
import { DayFront } from './DayFront';
import { HeaderFront } from './HeaderFront';

export const MonthFront = (props) => {
    const month = props.month;
    const holiday = props.holiday;
    const holidayWeek = props.holidayWeek;
    const holidayBoolean = props.holidayBoolean;
        
    return (
        <div className="calendar-wrap">
            <HeaderFront />
            <table>
                <thead>
                    <tr>
                        <th>日</th>
                        <th>月</th>
                        <th>火</th>
                        <th>水</th>
                        <th>木</th>
                        <th>金</th>
                        <th>土</th>
                    </tr>
                </thead>
                <tbody>
                    {month.map((row, i) => (
                        <tr>
                            {row.map((day, idx) => (
                                <DayFront day={day} key={idx} holiday={holiday} holidayWeek={holidayWeek} holidayBoolean={holidayBoolean}/>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
