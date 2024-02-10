import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import { useSelector, useDispatch } from "react-redux";
import Button from "../common/Button";
import { cancleOrder } from "../../modules/order";

const ConfirmBlock = styled(Responsive)`
  display : flex;
  flex-direction : column;
  padding-top : 4rem;
`;

const Title = styled.div`
    font-size : 1rem;
    font-weight : bold;
    margin-bottom : 2rem;
`

const Text = styled.div`
 & + & {
    margin-top : 15px;
 }
`


const Confirm  = ({order, date, userName, loading}) => {
    const [check, setCheck] = useState(false);
    const [status, setStatus] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
      if(order){
        setCheck(true);   //게시글 존재 여부 판단
        if(order.orderStatus === "ORDER") {
            setStatus("주문 중");
        }
        else if(order.orderStatus === "CANCLE") {
            setStatus("주문 취소");
        }
        else if(order.orderStatus === "DONE") {
            setStatus("주문 완료");
        }
      } else {
        setCheck(false);
      }
    }, [order])

    const onCancle = async (e) => {
        const userConfirmed = window.confirm("주문을 취소하시겠습니까?");

        // If the user confirmed, proceed with the cancellation
        if (userConfirmed) {
          dispatch(cancleOrder(order.id));

        }
    };



    return (
        <>
        {!loading && order && 
        <>
        <ConfirmBlock>
            <Title>{userName} 님의 주문</Title>
            <Text>주문 시간 : {date}</Text>
            <Text>매장 : {order.storeName}</Text>
            <Text>{order.itemName} {order.count} 개</Text>
            <Text>주문 상태 : {status}</Text>
            <Button onClick={onCancle}>주문 취소</Button>
        </ConfirmBlock>
        
        </>
        }
        </>
    );
}

export default Confirm;