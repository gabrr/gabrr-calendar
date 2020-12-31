import { test1, teste2 } from '../../MOCK';
import { getYears, getListOfDays, listDaysOfPrevMonth, listDaysOfCurrentMonth, listDaysOfNextMonth } from './helpers';
export {}

test('Return list of 2 years behind and 3 years ahead', () => {
    expect(getYears(2020)).toEqual([2018, 2019, 2020, 2021, 2022, 2023])
})

test('Days of the previous month to show', () => {
    const teste1 = ["12-27-2020", "12-28-2020", "12-29-2020", "12-30-2020", "12-31-2020"]
    const teste2 = ["11-29-2020", "11-30-2020"]

    expect(listDaysOfPrevMonth(5, 31, 1, 2021)).toEqual(teste1)
})

test('Listing days of the current month', () => {
    expect(listDaysOfCurrentMonth(2020, 12)).toEqual(teste2)
})

test('Days of the month listed', () => {
    expect(getListOfDays('12-1-2020')).toEqual(test1)
})

test('Days left from the next month to show on the current month', () => {
    expect(listDaysOfNextMonth(33, 35, 12, 2020)).toEqual(['1-1-2021', '1-2-2021'])
})


