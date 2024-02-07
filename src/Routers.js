import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import PublicRoute from "./lib/router/PublicRoute";
import PrivateRoute from "./lib/router/PrivateRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import OrderListPage from "./pages/OrderListPage";

const Routers = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/join" component={JoinPage}/>
            <Route path="/main" component={MainPage}/>
            <Route path="/menuList/:storeId/:name" component={MenuPage}/>
            <Route path="/orders" component={OrderListPage}/>
        </BrowserRouter>
    )
}

export default withRouter(Routers);