import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// reducers
import reminders from './reminders/reducer'
import formProps from './form/reducer'
import cities from './cities/reducer'

const reducers = combineReducers({
    reminders,
    formProps,
    cities
})

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))