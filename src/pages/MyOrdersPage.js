import React from "react";
import MainHeader from "../components/common/MainHeader";
import NavBar from "../components/common/NavBar";
import OrderListContainer from "../containers/user/OrderListContainer";
import Responsive from "../components/common/Responsive";
import styled from "styled-components";


const Span = styled(Responsive)`
    color : gray;
    margin-top : 20px;
    transform: translateX(30px);

`

const MyOrdersPage = () => {
    return (
        <>
        <NavBar/>
        <MainHeader/>
        <Span>주문 내역</Span>
        <OrderListContainer/>
        </>
    );
}

export default MyOrdersPage;