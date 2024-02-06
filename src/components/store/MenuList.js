import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";


const MenuItemBlock = styled(Responsive)`
    margin-top : 2rem;
`;

const MenuListBlock = styled(Responsive)`
  margin-top: 4rem;
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

const MenuList = ({menus, error}) => {
    const [check, setCheck] = useState(false);
  useEffect(() => {
    if(menus && menus.length == 0){
      setCheck(true);   //게시글 존재 여부 판단
    } else {
      setCheck(false);
    }
  }, [menus])
    return  (
        <MenuListBlock>
        {check && 
            <div style={{fontSize: '1.5rem', fontWeight: 'bold', padding:'4% 0'}}>
                게시글이 없습니다.</div>}

        { menus && (
            <div>
            {menus.map(menu => (
                <MenuItem menu={menu} key={menu.id} />
            ))}
            </div>
        )}

        </MenuListBlock>

    );
}


export default MenuList;