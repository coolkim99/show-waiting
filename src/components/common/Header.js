import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from "./Responsive";
import { useSelector } from "react-redux";


const HeaderBlock = styled(Responsive)`
  height : 5rem;
  z-index : 1000;
  align-items : center;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
`

const Message = styled.div`
  font-size : 1.3rem;
  color : #f53920;
  position: absolute;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover{
    text-decoration: none;
    color: #afafaf;
  }
`

const Header = () => {
  const { auth} = useSelector(({ auth }) => ({
    auth: auth.auth.result,
  }));
    return(
        <>
        <HeaderBlock>
            <Message>
                환영합니다 {auth.name} 님!
            </Message>
        </HeaderBlock>
        </>
    );
};

export default Header;