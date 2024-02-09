import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { doOrder, changeField, updateCount } from "../../modules/order";

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

const Text = styled.div`

`;

const MenuListBlock = styled(Responsive)`
  margin-top: 1rem;
  transform: translateX(30px);
  .selected {
    background-color: rgba(255, 157, 71, 0.7);
  }
`;

const CountBlock = styled.div`
  float : right;
  transform: translateY(-28px);
  background-color : white;
  padding : 5px;
  span {
    margin : 3px;
    font-size : 0.9rem;
  }
  .count {
    border : 0.8px solid gray;
    padding : 2px;
  }
`

const MenuItem = ({ menu, selected, onClick}) => {
  const { itemId, name, price } = menu;
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  // useSelector로부터 order.count를 가져오는 코드
  const { orderCount } = useSelector(({ order }) => ({
    orderCount: order.count,
  }));

  const onMinus = () => {
    setCount((count) => count - 1);
    dispatch(updateCount(count - 1));
  };

  const onPlus = () => {
    setCount((count) => count + 1);
    dispatch(updateCount(count + 1));
  };

  useEffect(() => {
    console.log(count);
  }, [count, dispatch]);

  return (
    <MenuItemBlock
      onClick={() => onClick(itemId)}
      className={selected === itemId ? "active" : ""}
    >
      <Text>{name}</Text>
      <Text>{price} ₩</Text>
      {selected === itemId && 
      <CountBlock>
        <span onClick={onMinus}>-</span>
        <span className="count"> {count} </span>
        <span onClick={onPlus}>+</span>
      </CountBlock>
      }

    </MenuItemBlock>
  );
};

const MenuList = ({ menus, error, loading, storeId }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const dispatch = useDispatch();

  const {userId, count} = useSelector(({ auth, order }) => ({
    userId: auth.auth.result.id,
    count: order.count
  }));

  const handleClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  useEffect(() => {
    console.log("Selected Item ID:", selectedItemId);
  }, [selectedItemId]);

  const check = menus && menus.length === 0;

  const onOrder = async (e) => {
    if(selectedItemId == null) {
      alert("선택된 상품이 없습니다. 주문하고 싶으신 상품을 선택하여 주세요.");
    }
    else {
      console.log(storeId, selectedItemId, userId, count);
      dispatch(doOrder(storeId, selectedItemId, userId, count));
    }
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
      <Button onClick={onOrder}>주문</Button>
    </MenuListBlock>
  );
};

export default MenuList;
