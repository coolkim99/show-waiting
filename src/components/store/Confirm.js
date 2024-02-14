import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import { useSelector, useDispatch } from "react-redux";
import Button from "../common/Button";
import { cancleOrder } from "../../modules/order";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ConfirmBlock = styled(Responsive)`
  display : flex;
  flex-direction : column;
  padding-top : 4rem;
`;

const Title = styled.div`
    font-size : 1rem;
    font-weight : bold;
    padding-bottom : 2rem;
    margin : 0 auto;
`

const Text = styled.div`
font-size : 0.8rem;
 & + & {
    margin-top : 10px;
 }
 span {
    color: gray;
 }
`

const ButtonWrapper = styled.div`
 display : flex;
 button {
    margin-right : 20px;
 }
`

const ButtonWithMarginTop = styled(Button)`
  margin-top: 0.9rem;
  margin-bottom: 1.2rem;
  width : 45%;
  background-color: rgba(235, 64, 52, 0.1);
`;

const Confirm  = ({order, date, userName, loading}) => {
    const [check, setCheck] = useState(false);
    const [status, setStatus] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
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

    const onConfirm = () => {
        history.push("/main");
    }




    return (
        <>
        {!loading && order && 
        <>
        <ConfirmBlock>
            <Title>{userName} 님의 주문</Title>
            <Text><span>주문 시간 : </span>{date}</Text>
            <Text><span>매장 : </span>{order.storeName}</Text>
            <Text>{order.itemName} {order.count} 개</Text>
            <Text><span>주문 상태 : </span>{status}</Text>
            <ButtonWrapper>
            <ButtonWithMarginTop onClick={onCancle}>주문 취소</ButtonWithMarginTop>
            <ButtonWithMarginTop onClick={onConfirm}>확인</ButtonWithMarginTop>
            </ButtonWrapper>
        </ConfirmBlock>
        
        </>
        }
        </>
    );
}

export default Confirm;