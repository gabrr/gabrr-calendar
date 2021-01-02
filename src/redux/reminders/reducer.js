// constants
import { 
    ADD_REMINDER,
    UPDATE_REMINDER,
    DELETE_REMINDER,
    GET_REMINDER,
    UPDATE_REMINDERS
} from './constants'

const INITIAL_STATE = {}


const reminderReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_REMINDER:
            return { ...state, [action.dateKey]: { ...state[action.dateKey], [action.reminderId]: action.newReminder } }
        case DELETE_REMINDER:
            if ( !Object.keys(state).includes(action.dateKey) ) return state
            
            const stateByDate = { ...state[action.dateKey] }
            const remindersByDate = {}
            
            Object.entries(stateByDate)
                .forEach(([reminderKey, data]) => {
                    !action.ids.includes(reminderKey) && (() => remindersByDate[reminderKey] = data )() }
                )

            const newState = { ...state, [action.dateKey]: { ...remindersByDate } }

            localStorage.setItem('reminders', JSON.stringify(newState))

            return newState

        case UPDATE_REMINDERS:
            return { ...action.reminders }
        case UPDATE_REMINDER:
            const newState2 = { ...state, [action.dateKey]: { ...state[action.dateKey], [action.reminderId]: action.newReminder } }
            localStorage.setItem('reminders', JSON.stringify(newState2))
            return newState2
        default: 
            return state
    }
}

export default reminderReducer