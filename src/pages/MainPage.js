import React from "react";
import StoreListContainer from "../containers/store/StoreListContainer";
import Header from "../components/common/Header";
import styled from "styled-components";
import Responsive from "../components/common/Responsive";

const Span = styled(Responsive)`
    color : gray;
    margin-top : 20px;
`
const MainPage = () => {
    return (
        <>
        <Header/>
        <Span>매장 리스트</Span>
        <StoreListContainer />
        </>
    );
}

export default MainPage;