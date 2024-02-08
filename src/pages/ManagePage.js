import React from "react";
import MainHeader from "../components/common/MainHeader";
import StoreNavBar from "../components/common/StoreNavBar";
import AddItemContainer from "../containers/manage/AddItemContainer";
import ItemTemplate from "../components/manage/ItemTemplate";
import MenuListContainer from "../containers/store/MenuListContainer";

const ManagePage = () => {
    return (
        <>
        <StoreNavBar/>
        <MainHeader/>
        <ItemTemplate>
            <AddItemContainer/>
        </ItemTemplate>
        <MenuListContainer/>
        
        </>
    );
}

export default ManagePage;