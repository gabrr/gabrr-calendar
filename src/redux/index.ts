import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// reducers
import reminders from './reminders/reducer'

const reducers = combineReducers({
    reminders
})

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))