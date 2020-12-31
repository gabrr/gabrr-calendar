import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { AllMonths, Home } from '../pages';


export const Routes: React.FC<any> = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/all-months" component={AllMonths} />
            </Switch>
        </Router>
    )
}
