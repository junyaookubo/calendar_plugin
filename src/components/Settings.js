import React, { useEffect ,useContext } from 'react';
import { HolidayWeekContext, HolidayNumWeekContext, TempHolidayContext, TempDayContext } from '..';

export const Settings = ( props ) => {
    const [holidayWeek, setHolidayWeek] = useContext(HolidayWeekContext);
    const [holidayNumWeek, setHolidayNumWeek] = useContext(HolidayNumWeekContext);
    const [tempHoliday, setTempHoliday] = useContext(TempHolidayContext);
    const [tempDay, setTempDay] = useContext(TempDayContext);

    // 毎週の定休日
    const handleEveryWeekChange =  (e) => {
        if(holidayWeek.includes(e.target.value)){
            setHolidayWeek(
                holidayWeek.filter((holiday => holiday !== e.target.value))
            );
        }else{
            setHolidayWeek([...holidayWeek,e.target.value]);
        }
    }

    // 第○曜日の定休日
    const addNumWeek = () => {
        setHolidayNumWeek([...holidayNumWeek,{'n1':'Sun'}]);
    }

    const deleteNumWeek = (i) => {
        setHolidayNumWeek(holidayNumWeek.filter((v, index) => index !== i));
    }

    const handleNumWeekChange = (i, value) => {
        let c = holidayNumWeek.map((v, index) => {
            if(index == i){
                let h = {};
                h[value] = Object.values(v)[0];
                v = h;
            }
            return v;
        });
        setHolidayNumWeek(c);
    }

    const handleWeekChange = (i, value) => {
        let c = holidayNumWeek.map((v, index) => {
            if(index == i){
                let h = {};
                h[Object.keys(v)[0]] = value;
                v = h;
            }
            return v;
        });
        setHolidayNumWeek(c);
    }


    // 臨時休業日
    const addTempHoliday = () => {
        setTempHoliday([...tempHoliday,""]);
    }

    const changeTempHoliday = (value, i) => {
        setTempHoliday(tempHoliday.map((elm, index) => {
            if(index == i){
                return elm = value;
            }else{
                return elm;
            }
        }));
    }

    const deleteTempHoliday = (i) => {
        setTempHoliday(tempHoliday.filter((elm, index) => index !== i));
    }
    

    // 臨時営業日
    const addTempDay = () => {
        setTempDay([...tempDay,""]);
    }

    const changeTempDay = (value, i) => {
        setTempDay(tempDay.map((elm, index) => {
            if(index == i){
                return elm = value;
            }else{
                return elm;
            }
        }));
    }

    const deleteTempDay = (i) => {
        setTempDay(tempDay.filter((elm, index) => index !== i));
    }


    return(
        <div className='settings-wrap'>
            <h2>定休日の設定</h2>
            <form action={location.href} method="POST" enctype="multipart/form-data">
                <div className="flex">
                    <div className="flex-box">
                        <div className="box">
                            <p className="text">祝日を更新する場合はcsvファイルを読み込んでください</p>
                            <p className="text"><small>デフォルトでは<a href="https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" target="_blank">国民の祝日</a>を読み込んでいます</small></p>
                            <div className="label-box">
                                <input type="hidden" name="holiday-boolean" value="false" checked="true"/>
                                <label htmlFor="holiday"><input type="checkbox" id="holiday" name="holiday-boolean" value="true" onChange={props.onChange} checked={props.holidayBoolean}/>祝日を表示する</label>
                            </div>
                            <input type="file" name="holiday"/>
                        </div>
                        <div className="box">
                            <p className="text">定休日とする曜日を設定してください</p>
                            <div className="check-box">
                                <div className="cont" id="week-check">
                                    <input type="hidden" name="week[]"/>
                                    <label for="week0"><input type="checkbox" name="week[]" id="week0" value="Sun" onChange={handleEveryWeekChange} checked={holidayWeek.includes('Sun')}/>日曜日</label>
                                    <label for="week1"><input type="checkbox" name="week[]" id="week1" value="Mon" onChange={handleEveryWeekChange} checked={holidayWeek.includes('Mon')}/>月曜日</label>
                                    <label for="week2"><input type="checkbox" name="week[]" id="week2" value="Tue" onChange={handleEveryWeekChange} checked={holidayWeek.includes('Tue')}/>火曜日</label>
                                    <label for="week3"><input type="checkbox" name="week[]" id="week3" value="Wed" onChange={handleEveryWeekChange} checked={holidayWeek.includes('Wed')}/>水曜日</label>
                                    <label for="week4"><input type="checkbox" name="week[]" id="week4" value="Thu" onChange={handleEveryWeekChange} checked={holidayWeek.includes('Thu')}/>木曜日</label>
                                    <label for="week5"><input type="checkbox" name="week[]" id="week5" value="Fri" onChange={handleEveryWeekChange} checked={holidayWeek.includes('Fri')}/>金曜日</label>
                                    <label for="week6"><input type="checkbox" name="week[]" id="week6" value="Sat" onChange={handleEveryWeekChange} checked={holidayWeek.includes('Sat')}/>土曜日</label>
                                </div>
                            </div>
                            <div className="select-box">
                                <div className="cont">
                                    <input type="hidden" name="num[]" value=""/>
                                    <input type="hidden" name="num-week[]" value=""/>
                                    {holidayNumWeek.map((d, index) => (
                                        <div className="flex flex-select-week" key={index}>
                                            <div className="num-select">
                                                <select name="num[]" onChange={(e) => {handleNumWeekChange(index, e.target.value)}}>
                                                    <option value="n1" selected={Object.keys(d) == 'n1' ? true : false}>第1</option>
                                                    <option value="n2" selected={Object.keys(d) == 'n2' ? true : false}>第2</option>
                                                    <option value="n3" selected={Object.keys(d) == 'n3' ? true : false}>第3</option>
                                                    <option value="n4" selected={Object.keys(d) == 'n4' ? true : false}>第4</option>
                                                    <option value="n5" selected={Object.keys(d) == 'n5' ? true : false}>第5</option>
                                                    <option value="n-end" selected={Object.keys(d) == 'n-end' ? true : false}>最終週</option>
                                                </select>
                                            </div>
                                            <div className="week-select">
                                                <select name="num-week[]" onChange={(e) => {handleWeekChange(index, e.target.value)}}>
                                                    <option value="Sun" selected={Object.values(d) == 'Sun' ? true : false}>日曜日</option>
                                                    <option value="Mon" selected={Object.values(d) == 'Mon' ? true : false}>月曜日</option>
                                                    <option value="Tue" selected={Object.values(d) == 'Tue' ? true : false}>火曜日</option>
                                                    <option value="Wed" selected={Object.values(d) == 'Wed' ? true : false}>水曜日</option>
                                                    <option value="Thu" selected={Object.values(d) == 'Thu' ? true : false}>木曜日</option>
                                                    <option value="Fri" selected={Object.values(d) == 'Fri' ? true : false}>金曜日</option>
                                                    <option value="Sat" selected={Object.values(d) == 'Sat' ? true : false}>土曜日</option>
                                                </select>
                                            </div>
                                            <p className="delete-btn" onClick={() => {deleteNumWeek(index)}}>削除する</p>
                                        </div>
                                    ))}
                                    <p className="add-btn" onClick={addNumWeek}>曜日を追加する</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-box con-r">
                        <div className="box">
                            <p className="text">臨時休業日の設定</p>
                            <div className="cont">
                                <input type="hidden" name="temp-holiday[]" />
                                {tempHoliday.map((elm, index) => (
                                    <div className="item" key={index}>
                                        <input type="date" name="temp-holiday[]" onChange={(e) => {changeTempHoliday(e.target.value,index)}} value={elm}/>
                                        <p className="delete-btn" onClick={() => {deleteTempHoliday(index)}}>削除する</p>
                                    </div>
                                ))}
                            </div>
                            <p className="add-btn" onClick={addTempHoliday}>日時を追加する</p>
                        </div>
                        <div className="box">
                            <p className="text">臨時営業日の設定</p>
                            <div className="cont">
                                <input type="hidden" name="temp-day[]" />
                                {tempDay.map((elm, index) => (
                                    <div className="item" key={index}>
                                        <input type="date" name="temp-day[]" onChange={(e) => {changeTempDay(e.target.value,index)}} value={elm}/>
                                        <p className="delete-btn" onClick={() => {deleteTempDay(index)}}>削除する</p>
                                    </div>
                                ))}
                            </div>
                            <p className="add-btn" onClick={addTempDay}>日時を追加する</p>
                        </div>
                    </div>
                </div>
                <div className="save-btn">
                    <input type="submit" value="設定を保存する" />
                </div>
            </form>
        </div>
    )
}