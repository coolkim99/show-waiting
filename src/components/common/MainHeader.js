import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from "./Responsive";
import { useSelector } from "react-redux";
import Image from '../../img/menu_hamburger.png';
import HoverImage from '../../img/hamburder_gray.png';
import NavBar from "./NavBar";


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
                환영합니다 <span>{auth.name}</span> 님!
            </Message>
        </HeaderBlock>
        </>
    );
};

export default Header;