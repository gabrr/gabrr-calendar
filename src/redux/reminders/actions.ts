import { getToRouteFormat } from './../../utils/Time/index';
import { ADD_REMINDER, DELETE_REMINDER, GET_REMINDER, UPDATE_REMINDER, UPDATE_REMINDERS } from './constants';
import { IReminder, createReminder } from './../../components/molecules/reminderHeader/helpers';


export const updateReminders = (reminders: any) => {
    return {
        type: UPDATE_REMINDERS,
        reminders,
    }
}

export const updateOneReminder = (dateKey: string, reminderId: string, newReminder: any) => {
    return {
        type: UPDATE_REMINDER,
        newReminder,
        dateKey,
        reminderId
    }
}

export const addReminder = (reminder: IReminder) => {
    const [ reminderId, newReminder ] = createReminder(reminder)
    const dateKey = getToRouteFormat(reminder.date)

    return {
        type: ADD_REMINDER,
        dateKey,
        reminderId,
        newReminder: newReminder[dateKey][reminderId]
    }
}

export const getReminderByID = (id: string) => {
    return {
        type: GET_REMINDER,
        id
    }
}

export const deleteReminders = (dateKey: string, ids: string[]) => {
    return {
        type: DELETE_REMINDER,
        ids,
        dateKey
    }
}