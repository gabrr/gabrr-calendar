// libraries
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// components
import { AllMonths, Home, CurrentMonth } from '../pages';


export const Routes: React.FC<any> = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={CurrentMonth} />
                <Route path="/date/:id" component={Home} />
                <Route path="/all-months" component={AllMonths} />
            </Switch>
        </Router>
    )
}
