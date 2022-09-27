import React, { useContext } from 'react';
import { MonthContext } from '../Calendar';

export const HeaderFront = () => {
    const [changeMonth, setChangeMonth] = useContext(MonthContext);
    const handlePrevMonth = () => {
        setChangeMonth(changeMonth.add(-1, 'month'));
    }
    const handleNextMonth = () => {
        setChangeMonth(changeMonth.add(1, 'month'));
    }
    return (
        <React.Fragment>
            <div className="cal-header">
                <button className='cal-nav prev' onClick={handlePrevMonth}>前の月へ</button>
                <p className="cal-header-text">{changeMonth.year()}年{changeMonth.format('M')}月</p>
                <button className='cal-nav next' onClick={handleNextMonth}>次の月へ</button>
            </div>
        </React.Fragment>
    )
}