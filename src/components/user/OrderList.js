import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/style/palette';
import { Link } from 'react-router-dom';

const OrderListBlock = styled(Responsive)`
  margin-top: 1rem;
  transform: translateX(30px);
`;

const OrderItemBlock = styled.div`
  padding : 10px;
  font-size : 0.8rem;
  & + & {
    margin-top: 1rem;
  }
  background-color: rgba(255, 157, 71, 0.2);

`;

const Title = styled.div`
    font-size : 1rem;
    font-weight : bold;
    margin-bottom : 2rem;
`

const Text = styled.div`
 & + & {
    margin-top : 8px;
 }
 span {
    color: gray;
 }
`


const OrderItem = ({ order }) => {
  const { userName, storeName, itemName, count, orderDate, status } = order;
  const [check, setCheck] = useState(false);

  const [orderStatus, setOrderStatus] = useState("");
  useEffect(() => {
    if(order){
      setCheck(true);   //게시글 존재 여부 판단
      if(status === "ORDER") {
          setOrderStatus("주문 중");
      }
      else if(status === "CANCLE") {
          setOrderStatus("주문 취소");
      }
      else if(status === "DONE") {
          setOrderStatus("주문 완료");
      }
    } else {
      setCheck(false);
    }
  }, [order])

  const formattedDate = new Date(orderDate).toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <OrderItemBlock>
            <Text><span>주문 시간 : </span>{formattedDate}</Text>
            <Text><span>매장 : </span>{storeName}</Text>
            <Text>{itemName} {count} 개</Text>
            <Text><span>주문 상태 : </span>{orderStatus}</Text>
    </OrderItemBlock>
  );
};

const OrderList= ({ orders, loading, error }) => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    if(orders && orders.length == 0){
      setCheck(true);   //게시글 존재 여부 판단
    } else {
      setCheck(false);
    }
  }, [orders])

  if (error) {
    return <OrderListBlock>에러가 발생했습니다.</OrderListBlock>;
  }
  
  return (
    <OrderListBlock>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {check && 
        <div style={{fontSize: '1.5rem', fontWeight: 'bold', padding:'4% 0'}}>
          이전 주문이 없습니다.</div>}

      {!loading && orders && (
        <div>
         {orders.map(order => (
          <OrderItem order={order} key={order.id} />
        ))}
        </div>
      )}

    </OrderListBlock>
  );
};

export default OrderList;