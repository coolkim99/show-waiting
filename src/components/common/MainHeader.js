import React from "react";
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
  position: absolute;
  span{
    color : gray;
    font-weight : bold;
  }
`;

const Header = () => {

  const { auth} = useSelector(({ auth }) => ({
    auth: auth.auth.result,
  }));
    return(
        <>
        <HeaderBlock>
            <Message>
                환영합니다 <span>{auth.name}</span> 님!
            </Message>
        </HeaderBlock>
        </>
    );
};

export default Header;