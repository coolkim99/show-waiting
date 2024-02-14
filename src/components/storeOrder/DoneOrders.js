import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import OrderItem from "./OrderItem";


const Span = styled(Responsive)`
    color : gray;
    margin-top : 20px;
    transform: translateX(30px);
`

const DoneOrderBlock = styled(Responsive)`
    margin-top: 1rem;
    transform: translateX(30px);
`;


const DoneOrders = ({ dones, loading }) => {

    const [check, setCheck] = useState(false);
    const [count, setCount] = useState(0);
    useEffect(() => {
      if(dones && dones.length === 0){
        setCheck(true);   //게시글 존재 여부 판단
        setCount(0);
      } else {
        setCheck(false);
        setCount(dones.length);
      }
    }, [dones])

    return (
        <>
        <Span>주문 완료 (<span style={{color: "red"}}>{count}</span> 개)</Span>
        <DoneOrderBlock>
        {check && 
            <div style={{fontSize: '1.2rem', fontWeight: 'bold', padding:'4% 0'}}>
                완료된 주문이 없습니다.</div>}

        {!loading && dones && (
            <div>
            {dones.map(done => (
                <OrderItem orderItem={done} key={done.id} />
            ))}
            </div>
        )}
        </DoneOrderBlock>
        </>
        
    );
}

export default DoneOrders;