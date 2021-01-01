import { WEEKDAYS } from "../Constants";

export const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();
// example: getDaysInMonth(new Date(2019, 1));

export const getStartWeekDay = (date: Date): [number, string] => {
    
    return [new Date(date).getDay(), WEEKDAYS[new Date(date).getDay()]]
}

export const getMonthName = (date: string) => {
  const newDate = new Date(date)!.toUTCString()
  return newDate.match(/[\S][\w]./gi)![2].toUpperCase()
}