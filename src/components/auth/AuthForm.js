import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { useState } from 'react';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  h4 {
    margin: 0;
    color: white;
    margin-bottom: 1.5rem;
    text-align : center;
    item-align : center;
  }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 0.8rem;
  border: none;
  border-radius : 5px;
  padding: 8px 8px;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid black;
  }
  & + & {
    margin-top: 1rem;
  }
`;

export const Select = styled.select`
    margin-top: 1rem;
	width: 107%;
	padding: 8px 8px;
	font-size: 0.8rem;
	line-height: inherit;
	border: 1px solid;
	border-radius: 5px;
	color: white;
	background-color: transparent;
	&:focus {
		border-color: red;
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
    text-decoration: none;
    font-size: 0.9em;
    &:hover {
      color: white;
    }
  }
`;
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
    login: '로그인',
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



const AuthForm = ({type, form, onChange, onSubmit, error}) => {
    const text = textMap[type];

    const selectList = ["CONSUMER", "STORE"];
    const [Selected, setSelected] = useState("");
    const handleSelect = (e) => {
        setSelected(e.target.value);
      };

  return (
    <AuthFormBlock>
      <h4>{text}</h4>
      <form onSubmit={onSubmit}>
      <StyledInput
          autoComplete="email"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={form.email}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {type === 'register' && (
          <StyledInput
          autoComplete="name"
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={form.name}
        />
        )}
        {type === 'register' && (
          <Select
          autoComplete="type"
          name="type"
          placeholder="회원 종류"
          onChange={onChange}
          value={form.type}
        >
			{selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
            </Select>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop>
            {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
      {type === 'login' ? (
          <Link to="/join">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;