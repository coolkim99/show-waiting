import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";


const MenuItemBlock = styled.div`
  background-color: rgba(255, 157, 71, 0.2);
  padding : 10px;
  font-size : 0.8rem;
  &:hover {
    background: lightgray;
    color: white;
    text-decoration: none;
  }
  & + & {
    margin-top: 0.5rem;
  }
`;

const Text = styled.div`

`;

const MenuListBlock = styled(Responsive)`
  margin-top: 1rem;
  transform: translateX(30px);
`;

const MenuItem = ({ menu }) => {
    const { id, name, price } = menu;

    return (
        <MenuItemBlock>
            <Text>{name}</Text>
            <Text>{price} ₩</Text>
        </MenuItemBlock>
    )
}

const MenuList = ({menus, error, loading}) => {
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
                준비된 메뉴가 없습니다.</div>}

        {!loading && menus && (
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