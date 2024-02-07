import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { orderDone, notDone } from "../../modules/process";
import { findOrdering, findDone } from "../../modules/orders";

const OrderItemBlock = styled.div`
  background-color: rgba(255, 157, 71, 0.2);
  padding : 10px;
  font-size : 0.8rem;
  & + & {
    margin-top: 0.5rem;
  }
`;

const Text = styled.div`
    & + & {
        margin-top: 0.3rem;
    }
`;

const TextBlock = styled.div`
    margin-top : 0.7em;
    margin-bottom : 0.7em;
    background : white;
    padding : 10px;
`;

const OrderItem = ({ orderItem }) => {
    const dispatch = useDispatch();

    const { authId } = useSelector(({ auth }) => ({
        authId: auth.auth.result.id
      }));

    const { id, userName, itemName, count, orderDate, status } = orderItem;

    const onDone = async () => {
        await dispatch(orderDone(id));
        console.log("onDone")
        // await dispatch(findDone(authId));
        // await dispatch(findOrdering(authId));
    };

    const onRedo = async () => {
        await dispatch(notDone(id));
        console.log("onRedo")
        // await dispatch(findDone(authId));
        // await dispatch(findOrdering(authId));
    };

    return (
        <OrderItemBlock>
            <Text>{userName} 님의 주문 {id} 번</Text>
            <TextBlock>
                <Text>{itemName}</Text>
                <Text>수량 : {count}</Text>
            </TextBlock>
            {status ==="ORDER" && <>
                <Button onClick={onDone}>완료</Button>
            </>
            }
            {status ==="DONE" && <>
                <Button onClick={onRedo}>취소</Button>
            </>
            }
            
        </OrderItemBlock>
    )
}

export default OrderItem;