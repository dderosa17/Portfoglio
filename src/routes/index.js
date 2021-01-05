import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { About } from '../components/about/About'
import { Experience } from '../components/experience/Experiance';


export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/" component={About} />
                <Route exact={true} path="/experiance" component={Experience} />
            </Switch>
        </Router>
    )
}