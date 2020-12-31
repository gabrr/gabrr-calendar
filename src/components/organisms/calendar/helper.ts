import { getMonthName } from "../../../utils/Time"

export const getClassIfOffset = (date: string, s: string) => new Date(date).getMonth() !== new Date(s).getMonth() ? 'offset' : ''
export const getClassIfSelected = (date: string, s: string) => new Date(date).toISOString() === new Date(s).toISOString() ? 'selected' : ''

export const monthIndicatorConstructor = (date: string) => {
    const selectedMonthNum = new Date(date).getMonth() + 1
    const prevMonth = selectedMonthNum - 1 === 0 ? 12 : selectedMonthNum - 1
    const month2 = selectedMonthNum + 1 >= 12 ? 1 : selectedMonthNum + 1
    const month3 = selectedMonthNum + 2 >= 12 ? 2 : selectedMonthNum + 2

    return [
        getMonthName(`${prevMonth}`),
        getMonthName(`${selectedMonthNum}`),
        getMonthName(`${month2}`),
        getMonthName(`${month3}`)
    ]

}

export const indicatorClass = (monthIndicador = false, monthIndex: number) => {
    if (!monthIndicador && monthIndex !== 1) return 'hidden'
    if (monthIndex === 1) return 'selected'
    return ''
}