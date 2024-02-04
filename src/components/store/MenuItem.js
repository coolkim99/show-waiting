import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";


const MenuItemBlock = styled(Responsive)`
    margin-top : 2rem;
`;

const MenuItem = ({ menu }) => {
    const { id, name, price } = menu;

    return (
        <MenuItemBlock>
            <div>상품 명 : {name}</div>
            <div>가격 : {price}</div>
        </MenuItemBlock>
    )
}

export default MenuItem;