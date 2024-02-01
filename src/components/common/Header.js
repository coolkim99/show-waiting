import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from "./Responsive";

const WholeBlock = styled.div`
    background : #f53920;
    width : 100%;
    height : 100%;
    align-items : center;
`

const HeaderBlock = styled(Responsive)`
  height : 5rem;
  display: fixed;
  width : 100%;
  z-index : 1000;
  align-items : center;
  background : #f53920;
  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-left : 15px;
  }
`

const RightWrapper = styled.div`
  margin-left: auto;
`

const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover{
    text-decoration: none;
    color: #afafaf;
  }
`

const Header = () => {
    return(
        <>
        <HeaderBlock>
            <span className="logo">
                
            </span>
        </HeaderBlock>
        </>
    );
};

export default Header;