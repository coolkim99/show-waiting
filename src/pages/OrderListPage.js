import React from "react";
import MainHeader from '../components/common/MainHeader';
import OrdersContainer from "../containers/storeOrder/OrdersContainer";

const OrderListPage = () => {
    return (
        <>
        <MainHeader/>
        <OrdersContainer/>
        </>
    );
}

export default OrderListPage;