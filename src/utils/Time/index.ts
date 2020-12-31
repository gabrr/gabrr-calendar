export const getDaysInMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

getDaysInMonth(new Date(2019, 1));

export const getStartWeekDay = (date: Date) => {
    const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return weekdays[new Date(date).getDay()]
}

export const getMonthName = (date: string) => {
  const newDate = new Date(date)!.toUTCString()
  return newDate.match(/[\S][\w]./gi)![2].toUpperCase()
}