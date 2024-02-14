import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { useHistory } from "react-router-dom";

const WholeBlock = styled.div`
    background : #d63f2b;
    width : 100%;
    height : 100%;
    min-height : 100vh;
    position: relative;
`

const Title = styled.div`
  color : white;
  font-size: 2rem;
  text-align : center;
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translateX(-50%);
`

const ButtonWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translateX(-50%);
`

const ButtonHome = styled(Button)`
  font-size : 1.3rem;
  margin : 1.3rem;
  display : block;
  width : 200px;
  height : 50px;
  @media (max-height : 800px) {
    width : 200px;
    height : 50px;
  }
`;

const Home = () => {
  let history = useHistory();
    return (
        <>
        <WholeBlock>
          <Title>
            Show Waiting
          </Title>
          <ButtonWrapper>
            <ButtonHome onClick ={ () => {
              history.push("/login")
            }}>SignIn</ButtonHome>
            <ButtonHome onClick ={ () => {
              history.push("/join")
            }}>Signup</ButtonHome>
          </ButtonWrapper>
        </WholeBlock>
        </>
    );
};

export default Home;