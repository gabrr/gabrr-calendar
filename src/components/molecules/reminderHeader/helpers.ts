import { v4 as uuid } from "uuid";

interface Props {
    title: string
    city: string
    date: string
    color: string
}

type CreateReminder = (props: Props) => string


export const createReminder: CreateReminder = ({ date, ...rest }) => {
    const key = date.slice(0, 10)
    const data: string = localStorage.getItem('key') || ''
    const dataStoraged = data && JSON.parse(data)
    const reminderID = uuid()

    localStorage.setItem(key, JSON.stringify(
        {
            ...dataStoraged,
            [reminderID]: { date, ...rest }
        }
    ))

    return reminderID
}