function DayRussian(day) {
    if (day === 0) return 6;
    else return day - 1;
}

export default function giveDate(date) {
    let [Dat, Time] = date.split(" ");
    //            0    1     2     3     4     5    6
    let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    let now = new Date();
    let old = new Date(date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    let DayDelta = now.getDate() - old.getDate();
    if ((old.getFullYear() === now.getFullYear()) && (old.getMonth() == now.getMonth())) {
        if (DayDelta === 0) {
            return Time;
        } else if (DayDelta == 1) {
            return "Вчера";
        }
        //Вс - пн = 6-0 = 6
        else if ((DayDelta < 7) && ((DayRussian(now.getDay()) - DayRussian(old.getDay())) > 1)) {
            return (days[DayRussian(old.getDay())])
        }
    }
    return Dat;
}