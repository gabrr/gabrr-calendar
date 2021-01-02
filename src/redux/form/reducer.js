// constants
import { 
    SHOW_FORM,
    HIDE_FORM
} from './contants'


const INITIAL_STATE = {
    dateKey: '',
    reminderId: '',
    color: 'red',
    hidden: 'hidden'
}

const formReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SHOW_FORM:
            return { ...state, hidden: '', ...action.payload }
        case HIDE_FORM:
            return { ...state, hidden: 'hidden', dataKey: '', reminderId: '' }
        default: 
            return state
    }
}

export default formReducer