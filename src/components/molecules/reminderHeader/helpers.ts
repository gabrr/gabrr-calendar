import { getToRouteFormat } from './../../../utils/Time/index';
import { v4 as uuid } from "uuid";

export interface IReminder {
    title: string
    city: string
    date: string
    color: string
}

type CreateReminder = (props: IReminder) => [string, any]


export const createReminder: CreateReminder = ({ date, ...rest }) => {
    const key = getToRouteFormat(date)
    const allReminders: string = localStorage.getItem('reminders') || ''
    const parsedAllReminders = allReminders && JSON.parse(allReminders)
    const filteredByDate = parsedAllReminders[key]

    const reminderID = uuid()

    const reminders = {
        ...parsedAllReminders,
        [key]: {
            ...filteredByDate,
            [reminderID]: { date, ...rest }
        }
    }

    localStorage.setItem('reminders', JSON.stringify(reminders))

    return [ reminderID, reminders ]
}