import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./lib/router/PublicRoute";
import PrivateRoute from "./lib/router/PrivateRoute";

import HomePage from "./pages/HomePage";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}/>
        </Routes>
    )
}

export default Routers;