import React from "react";
import StoreListContainer from "../containers/store/StoreListContainer";
import Header from "../components/common/MainHeader";
import styled from "styled-components";
import Responsive from "../components/common/Responsive";
import NavBar from "../components/common/NavBar";

const Span = styled(Responsive)`
    color : gray;
    margin-top : 20px;
    transform: translateX(30px);

`
const MainPage = () => {
    return (
        <>
        <NavBar/>
            <Header/>
            <Span>매장 리스트</Span>
            <StoreListContainer />
        </>
    );
}

export default MainPage;