import React, {useEffect} from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from "./Responsive";
import { useSelector, useDispatch } from "react-redux";
import { findStore } from "../../modules/store";


const HeaderBlock = styled(Responsive)`
  height : 5rem;
  z-index : 1000;
  align-items : center;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
`

const Message = styled.div`
  font-size : 1.3rem;
  color : #f53920;
  position: absolute;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover{
    text-decoration: none;
    color: #afafaf;
  }
`

const MenuHeader = ({ name }) => {
    return(
        <>
        <HeaderBlock>
            <Message>
                {name}
            </Message>
        </HeaderBlock>
        </>
    );
};

export default MenuHeader;