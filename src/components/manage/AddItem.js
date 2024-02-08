import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { useState } from 'react';
import Responsive from '../common/Responsive';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const ItemFormBlock = styled(Responsive)`
h4{
    color: gray;
}
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size:0.8rem;
  border: 0.9px solid black;
  border-radius : 5px;
  padding: 8px 8px;
  outline: none;
  width: 75%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid black;
  }
  & + & {
    margin-top: 0.8rem;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: white;
    text-decoration: underline;
    &:hover {
      color: white;
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 0.9rem;
  border: 0.9px solid black;
`;

const textMap = {
    add: '상품 등록',
    register: '회원가입',
};

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;



const AddItem = ({type, form, onChange, onSubmit, error}) => {
    const text = textMap[type];

  return (
    <ItemFormBlock>
      <h4>{text}</h4>
      <form onSubmit={onSubmit}>
      <StyledInput
          autoComplete="name"
          name="name"
          placeholder="메뉴 이름"
          onChange={onChange}
          value={form.name}
        />
        <StyledInput
          autoComplete="price"
          name="price"
          placeholder="가격"
          onChange={onChange}
          value={form.price}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop>
            추가
        </ButtonWithMarginTop>
      </form>
      <Footer>
      </Footer>
    </ItemFormBlock>
  );
};

export default AddItem;