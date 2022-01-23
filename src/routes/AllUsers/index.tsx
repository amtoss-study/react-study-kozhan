import React from "react";

import List from "./List";
import Details from "./Details";

import { Switch, Route, useRouteMatch } from "react-router-dom";

const AllUsers = () =>
{
    const match = useRouteMatch();
    return(
        <Switch>
            <Route path={`${match.path}/:userId`} component={Details} />
            <Route path={match.path} component={List} />
        </Switch>
    )
}

export default AllUsers;