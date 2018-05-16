import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SalonListContainer from './containers/salon-list-container';
import SalonContainer from './containers/salon-container';

export const Routes = () => {
        return(
            <Switch>
                <Route path="/" exact component={SalonListContainer} />
                <Route path="/salons/:id" exact component={SalonContainer} />
            </Switch>
        )
}