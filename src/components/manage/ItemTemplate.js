import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';

/**
 * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

const ItemTemplateBlock = styled.div`
    width : 100%;
    height : 100%;

`;
/* 흰색 박스 */
const WhiteBox = styled(Responsive)`
  transform: translateX(30px);
  border-bottom: 1px solid lightgray;

`;
const LinkTo = styled(Link)`
  color: black;
  &:hover{
    color: ${palette.gray[6]};
  }
`;

const ItemTemplate = ({ children }) => {
    return (
      <ItemTemplateBlock>
        <WhiteBox>
          {children}
        </WhiteBox>
      </ItemTemplateBlock>
    );
  };

export default ItemTemplate;