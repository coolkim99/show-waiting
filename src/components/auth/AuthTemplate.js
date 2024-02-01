import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';

/**
 * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

const AuthTemplateBlock = styled.div`
    width : 100%;
    height : 100%;
    background : #d63f2b;
    min-height : 100vh;

`;
/* 흰색 박스 */
const WhiteBox = styled(Responsive)`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);

`;
const LinkTo = styled(Link)`
  color: black;
  &:hover{
    color: ${palette.gray[6]};
  }
`;

const AuthTemplate = ({ children }) => {
    return (
      <AuthTemplateBlock>
        <WhiteBox>
          <div className="logo-area">
            <LinkTo to="/" style={{textDecoration:'none', fontSize : '1.4rem', color : 'white'}} >Show Waiting</LinkTo>
          </div>
          {children}
        </WhiteBox>
      </AuthTemplateBlock>
    );
  };

export default AuthTemplate;