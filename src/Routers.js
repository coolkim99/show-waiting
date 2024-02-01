import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import PublicRoute from "./lib/router/PublicRoute";
import PrivateRoute from "./lib/router/PrivateRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";

const Routers = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/join" component={JoinPage}/>
        </BrowserRouter>
    )
}

export default withRouter(Routers);