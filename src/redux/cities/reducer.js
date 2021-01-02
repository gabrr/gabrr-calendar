// constants
import { GET_CITIES } from "./constants";

const INITIAL_STATE = []

const citiesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_CITIES:
            return action.payload
        default: 
            return state
    }
}

export default citiesReducer