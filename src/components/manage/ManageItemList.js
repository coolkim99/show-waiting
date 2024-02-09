import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import { deleteItem } from "../../modules/item";
import { useDispatch } from "react-redux";

const MenuItemBlock = styled.div`
  background-color: rgba(255, 157, 71, 0.2);
  padding: 10px;
  font-size: 0.8rem;
  &:hover {
    background: lightgray;
    color: white;
    text-decoration: none;
  }
  & + & {
    margin-top: 0.5rem;
  }
  &.active {
    border: 0.8px solid gray;
  }
`;

const Text = styled.div``;

const MenuListBlock = styled(Responsive)`
  margin-top: 1rem;
  transform: translateX(30px);
  .selected {
    background-color: rgba(255, 157, 71, 0.7);
  }
`;

const MenuItem = ({ menu, selected, onClick }) => {
  const { itemId, name, price } = menu;

  return (
    <MenuItemBlock
      onClick={() => onClick(itemId)}
      className={selected === itemId ? "active" : ""}
    >
      <Text>{name}</Text>
      <Text>{price} ₩</Text>
    </MenuItemBlock>
  );
};

const ManageItemList = ({ menus, error, loading }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  useEffect(() => {
    console.log("Selected Item ID:", selectedItemId);
  }, [selectedItemId]);

  const check = menus && menus.length === 0;

  const onDelete = async () => {
    if(selectedItemId == null) {
      alert("선택된 상품이 없습니다. 삭제하고 싶으신 상품을 선택하여 주세요.");
    }
    else {
      await dispatch(deleteItem(selectedItemId));
    }
    console.log("onDelete", selectedItemId);
    // await dispatch(findDone(authId));
    // await dispatch(findOrdering(authId));
};

  return (
    <MenuListBlock>
      {check && (
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", padding: "4% 0" }}>
          준비된 메뉴가 없습니다.
        </div>
      )}

      {!loading && menus && (
        <div>
          {menus.map((menu) => (
            <MenuItem
              key={menu.itemId}
              menu={menu}
              selected={selectedItemId}
              onClick={handleClick}
            />
          ))}
        </div>
      )}
      <Button onClick={onDelete}>상품 삭제</Button>
    </MenuListBlock>
  );
};

export default ManageItemList;
