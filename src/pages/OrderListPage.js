import React from "react";
import MainHeader from '../components/common/MainHeader';
import OrdersContainer from "../containers/storeOrder/OrdersContainer";
import StoreNavBar from "../components/common/StoreNavBar";

const OrderListPage = () => {
    return (
        <>
        <StoreNavBar/>
        <MainHeader/>
        <OrdersContainer/>
        </>
    );
}

export default OrderListPage;