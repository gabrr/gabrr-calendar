// constants
import { 
    ADD_REMINDER,
    UPDATE_REMINDER,
    DELETE_REMINDER
} from '../constants'

interface IState {
    title: string
    city: string
    date: string
    color: string
}[]

const INITIAL_STATE: IState | [] = []

export default (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case ADD_REMINDER:
            return [ ...state, action.payload ]
        case UPDATE_REMINDER:

            // const id action.id

            return 
        default: 
            return state
    }
} 