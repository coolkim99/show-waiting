import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeaderBlock = styled.div`
  height : 5rem;
  display: fixed;
  width : 100%;
  z-index : 1000;
  align-items : center;
  background : #081A51;
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
            <span className="logo"><LinkTo to="/category">Modit Admin</LinkTo></span>
        </HeaderBlock>
        </>
    );
};

export default Header;