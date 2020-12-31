import { getMonthName } from './../../utils/Time/index';
import { getDaysInMonth, getStartWeekDay } from "../../utils/Time"
import { IAllMonths } from '../../types/months';

export const getYears = (year: number) => {
    // it returns 2 years behind and 3 years ahead
    const years = []
    for (let i = year - 2; i <= year + 3; i++) {
        years.push(i)
    }
    return years
}

export const listDaysOfPrevMonth = (index: number, monthDays: number, month: number, year: number) => {

    // index = index of the week. sunday is 0
    // monthDays = how many days has the previous month
    // month = month index. december is 12
    // year. for example: 2020

    const result = []
    const previousMonth = month - 1 === 0 ? '12' : month - 1
    const isSameYear = month - 1 !== 0 && true
    const yearToList = isSameYear ? year : year - 1

    for (let i = monthDays; i > monthDays - index; i--) {
        result.push(`${previousMonth}-${i}-${yearToList}`)
    }
    return result.sort()
}

export const listDaysOfCurrentMonth = (year: number, month: number) => {
    const result = []

    const monthDays = getDaysInMonth(year, month);

    for (let i = 1; i <= monthDays; i++) {
        result.push(`${month}-${i}-${year}`)
    }

    return result
}

export const listDaysOfNextMonth = (total: number, daysMax: number, month: number, year: number) => {
    const daysLeft = daysMax - total
    const isSameYear = month + 1 <= 12 && true
    const yearToList = isSameYear ? year : year + 1
    const nextMonth = month + 1 > 12 ? '1' : month + 1

    const result = []
    
    for (let i = 1; i <= daysLeft; i++) {
        result.push(`${nextMonth}-${i}-${yearToList}`)
    }

    return result

}

export const getListOfDays = (dateString: string) => {
    const daysPerCalendar = 35
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth() + 1

    const daysNumPreviousMonth = getDaysInMonth(year, month - 1)
    const [ startWeekIndex ] = getStartWeekDay(date)

    const daysOfPreviousMonth = listDaysOfPrevMonth(startWeekIndex, daysNumPreviousMonth, month, year)
    const daysOfCurrentMonth = listDaysOfCurrentMonth(year, month)
    const daysOfNextMonth = listDaysOfNextMonth(daysOfPreviousMonth.length + daysOfCurrentMonth.length, daysPerCalendar, month, year)


    return [...daysOfPreviousMonth, ...daysOfCurrentMonth, ...daysOfNextMonth]
}


export const allMonthsConstructor = (date = '12-31-2020') => {
    const currentYear = new Date(date).getFullYear()
    const yearsToShow = getYears(currentYear)
    
    const result: IAllMonths = {}

    yearsToShow.forEach(year => {
        for (let i = 1; i <= 12; i++) {
            result[year] = { ...result[year], [i]: getListOfDays(`${i}-${1}-${year}`) }
        }
    })

    return result
}