import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
dayjs.locale(ja);

export function getMonth(data = dayjs()){
    const year = data.year();
    const month = data.month();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let row = dayjs().endOf('month').date() + firstDayOfTheMonth;
    Math.floor(row / 7) >= 5 ? row = 6 : row = 5;
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(row).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
}