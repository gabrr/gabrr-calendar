import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// reducers
import reminders from './reminders/reducer'
import formProps from './form/reducer'

const reducers = combineReducers({
    reminders,
    formProps
})

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))