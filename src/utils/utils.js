export function get7DaysBefore() {
    let date = new Date(),
        timestamp, newDate;
    if (!(date instanceof Date)) {
        date = new Date(date.replace(/-/g, '/'));
    }
    timestamp = date.getTime();
    newDate = new Date(timestamp - 7 * 24 * 3600 * 1000);
    let month = newDate.getMonth() + 1
    let day = newDate.getDate()
    month = month < 10 ? `0${month - 1}` : month
    day = day < 10 ? `0${day - 1}` : day
    return `${newDate.getFullYear()}-${month}-${day}`
}