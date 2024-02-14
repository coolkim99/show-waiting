import React from "react";
import styled from "styled-components";
import home from '../../img/home.png';
import receipt from '../../img/receipt.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Tooltip } from "react-tooltip";
import logoutImg from '../../img/logout.png';
import { useDispatch } from "react-redux";
import { logout } from '../../modules/auth';

const Wrapper =styled.div`
width : 60px;
float : left;
    min-height : 100vh;
    background-color: #d63f2b;
`;

const Text = styled.div`
  img{
    width : 30px;
    margin-top: 40px;
    margin-left : 15px;
  }
`;
const Logout = styled.div`
  bottom : 30px;
  position : absolute;
  img{
    width : 30px;
    margin-top: 40px;
    margin-left : 15px;
  }
`;

const Logo = styled.div`
  margin-top : 30px;
  margin-left : 15px;
  margin-right : 13px;
  margin-bottom : 20px;
  padding : 2px;
  border: 0.8px solid #d63f2b;
  border-radius : 25px;
  font-size : 1.2rem;
  color : white;
  font-weight : bold;
`;


const NavBar = () => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    }
    return(
        <>
        <Wrapper>
            <Logo>SW</Logo>
        <Text><Link to="/main" id="home"><img src={home}/></Link></Text>
        <Tooltip anchorSelect="#home" place="right"
                style={{backgroundColor:"#f2eeed", color:"black"}}>홈</Tooltip>
        <Text><Link to="/myorders" id="myorders"><img style={{width: "35px"}} src={receipt}/></Link></Text>
        <Tooltip anchorSelect="#myorders" place="right"
            style={{backgroundColor:"#f2eeed", color:"black"}}>주문 내역</Tooltip>
        <Logout><Link to="/" id="logout" onClick={onLogout}><img src={logoutImg}/></Link></Logout>
        <Tooltip anchorSelect="#logout" place="right"
            style={{backgroundColor:"#f2eeed", color:"black"}}>로그아웃</Tooltip>  
        
        </Wrapper>
      </>
    );

}

export default NavBar;