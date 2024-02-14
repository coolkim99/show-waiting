import React from "react";
import styled from "styled-components";
import setting from "../../img/setting.png";
import home from '../../img/home.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import logoutImg from '../../img/logout.png';
import { logout } from '../../modules/auth';

const Wrapper =styled.div`
width : 60px;
float : left;
    min-height : 100vh;
    background-color: #d63f2b;
    border-right : 0.8px solid #d63f2b;
`;

const Text = styled.div`
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

const Logout = styled.div`
  bottom : 30px;
  position : absolute;
  img{
    width : 30px;
    margin-top: 40px;
    margin-left : 15px;
  }
`;

const StoreNavBar = () => {
    const dispatch = useDispatch();
    const {storeId, name} = useSelector(({ auth}) => ({
        storeId : auth.auth.result.id,
      }));

    const onLogout = () => {
        dispatch(logout());
    }

    return(
        <>
        <Wrapper>
            <Logo>SW</Logo>
        <Text><Link to="/orders" id="home"><img src={home}/></Link></Text>
        <Tooltip anchorSelect="#home" place="right"
                style={{backgroundColor:"#f2eeed", color:"black"}}>홈</Tooltip>
        <Text><Link to={`/manage/${storeId}`} id="manage"><img src={setting}/></Link></Text>
        <Tooltip anchorSelect="#manage" place="right"
                style={{backgroundColor:"#f2eeed", color:"black"}}>메뉴 관리</Tooltip>
        <Logout><Link to="/" id="logout" onClick={onLogout}><img src={logoutImg}/></Link></Logout>
        <Tooltip anchorSelect="#logout" place="right"
            style={{backgroundColor:"#f2eeed", color:"black"}}>로그아웃</Tooltip>  
        </Wrapper>

          
      </>
    );

}

export default StoreNavBar;