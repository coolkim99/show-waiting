import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import setting from "../../img/setting.png";
import home from '../../img/home.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

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

const StoreNavBar = () => {
    const {storeId, name} = useSelector(({ auth}) => ({
        storeId : auth.auth.result.id,
      }));

    return(
        <>
        <Wrapper>
            <Logo>SW</Logo>
        <Text><Link to="/orders"><img src={home}/></Link></Text>
        <Text><Link to={`/manage/${storeId}`}><img src={setting}/></Link></Text>
          </Wrapper>
      </>
    );

}

export default StoreNavBar;