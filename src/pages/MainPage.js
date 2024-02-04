import React from "react";
import StoreListContainer from "../containers/store/StoreListContainer";
import Header from "../components/common/Header";

const MainPage = () => {
    return (
        <>
        <Header/>
        <StoreListContainer />
        </>
    );
}

export default MainPage;