export const getClassIfOffset = (date: string, s: string) => new Date(date).getMonth() !== new Date(s).getMonth() ? 'offset' : ''
export const getClassIfSelected = (date: string, s: string) => new Date(date).toISOString() === new Date(s).toISOString() ? 'selected' : ''

export const monthIndicatorConstructor = (date: string) => {
    const year = new Date(date).getFullYear()
    const month = new Date(date).getMonth() + 1

    const prevMonth = month - 1 === 0 ? '12' : month - 1
    const prevYear = month - 1 !== 0 ? year : year - 1
    
    const nextMonth1 = month + 1 === 13 ? '1' : month + 1
    const nextYear = month + 1 > 12 ? year + 1 : year
    const nextMonth2 = month + 2 === 14 ? '2' : month + 2

    return [
        `${prevMonth}-1-${prevYear}`,
        `${month}-1-${year}`,
        `${nextMonth1}-1-${nextYear}`,
        `${nextMonth2}-1-${nextYear}`,
    ]
}

export const indicatorClass = (monthIndicador = false, monthIndex: number) => {
    if (!monthIndicador && monthIndex !== 1) return 'hidden'
    if (monthIndex === 1) return 'selected'
    return ''
}