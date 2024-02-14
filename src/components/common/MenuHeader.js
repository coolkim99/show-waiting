import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import Responsive from "./Responsive";
import { useSelector } from "react-redux";


const HeaderBlock = styled(Responsive)`
  height : 5rem;
  z-index : 1000;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction : column;
  justify-content: center;
  
`

const Message = styled.div`
  font-size : 1.3rem;
  color : #f53920;
  width : 100%;

`;

const Waiting = styled.div`
font-size : 0.7rem;
span {
    color : #f53920;
}
`;

const MenuHeader = ({ name }) => {
    const str = name.toUpperCase();
    const [check, setCheck] = useState(false);
    const [counts, setCounts] = useState(0);
    const {ordering, loading} = useSelector(({ orders, loading}) => ({
        ordering: orders.ordering,
        loading: loading['orders/FIND_ORDERING']
      }));

      useEffect(() => {
        if(ordering && ordering.length === 0){
          setCheck(true);   //주문 중인것 여부 확인
          setCounts(0);
        } else if(ordering){
          setCheck(false);
          setCounts(ordering.length);
        }
      }, [ordering])
      

    return(
      <>
        <HeaderBlock>
          
        {!loading &&  (
          <>
          <Message>
                {str}
            </Message>
            <Waiting>
                대기 인원 : <span>{counts}</span> 명
            </Waiting>
            </>
            )}
        </HeaderBlock>
        </>
    );
};

export default MenuHeader;