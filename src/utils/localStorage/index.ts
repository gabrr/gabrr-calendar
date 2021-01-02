import store from "../../redux";
import { updateReminders } from '../../redux/reminders/actions';

export const getDateFromLocalStorage = () => {
    const reminders: string = localStorage.getItem('reminders') || ''
    if (!reminders) return false
    const parsedReminders = JSON.parse(reminders)
    store.dispatch(updateReminders(parsedReminders))
}