import store from "../";
import { addReminder, deleteReminders } from "./actions";

export {}


test('Delete multiple reminders', () => {
    
    const keyDate = '2021-01-01'

    const reminder = {
        city: "San Francisco, CA",
        color: "green",
        date: "2021-01-01T23:13",
        title: "Testing deletion",
    }

    store.dispatch(addReminder(reminder))
    const reminders = store.getState().reminders

    const reminderKey = Object.keys(reminders["2021-01-01"])[0]
    


    store.dispatch(deleteReminders(keyDate, [reminderKey]))

    expect(reminders[keyDate][reminderKey]).toEqual({
        city: "San Francisco, CA",
        color: "green",
        date: "2021-01-01T23:13",
        title: "Testing deletion",
    })
})