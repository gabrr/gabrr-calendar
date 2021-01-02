import store from "../";
import { addReminder, deleteReminders } from "./actions";

export {}


test('Delete multiple reminders', () => {
    
    const keyDate = '1-1-2021'

    const reminder = {
        city: "San Francisco, CA",
        color: "green",
        date: "2021-01-01T23:13",
        title: "Testing deletion",
    }

    store.dispatch(addReminder(reminder))
    store.dispatch(addReminder(reminder))
    store.dispatch(addReminder(reminder))

    const reminders = store.getState().reminders

    const reminderKey = Object.keys(reminders[keyDate])[0]
    const reminderKey1 = Object.keys(reminders[keyDate])[1]
    const reminderKey2 = Object.keys(reminders[keyDate])[2]

    store.dispatch(deleteReminders(keyDate, [reminderKey]))
    store.dispatch(deleteReminders(keyDate, [reminderKey1]))
    store.dispatch(deleteReminders(keyDate, [reminderKey2]))

    const newState = store.getState().reminders

    expect(newState[keyDate]).toEqual({})
})