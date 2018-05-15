import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SaloonListContainer } from './containers/saloon-list-container';
import { SaloonContainer } from './containers/saloon-container';

export const Routes = () => {
        return(
            <Switch>
                <Route path="/" exact component={SaloonListContainer} />
                <Route path="/saloon/:id" exact component={SaloonContainer} />
            </Switch>
        )
}