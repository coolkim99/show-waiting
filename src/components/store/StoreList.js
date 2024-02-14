import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/style/palette';
import { Link } from 'react-router-dom';

const StoreListBlock = styled(Responsive)`
  margin-top: 1rem;
  transform: translateX(30px);
`;

const StoreItemBlock = styled.div`
padding-top: 0.1rem;
  &:hover {
    background: lightgray;
    color: white;
    text-decoration: none;
  }
  border-bottom : 1px solid #e8e8e8;

`;

const StoreLink = styled(Link)`
  color : black;
  text-decoration : none;
  padding : 10px;
  font-size : 1.2rem;
`


const StoreItem = ({ store }) => {
  const { storeId, name} = store;
  const str = name.toUpperCase();

  return (
    <StoreItemBlock>
      <h3>
        <StoreLink to={`/menuList/${storeId}/${name}`}>{str}
        </StoreLink>
      </h3>
    </StoreItemBlock>
  );
};

const StoreList = ({ stores, loading, error }) => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    if(stores && stores.length == 0){
      setCheck(true);   //게시글 존재 여부 판단
    } else {
      setCheck(false);
    }
  }, [stores])

  if (error) {
    return <StoreListBlock>에러가 발생했습니다.</StoreListBlock>;
  }
  
  return (
    <StoreListBlock>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {check && 
        <div style={{fontSize: '1.2rem', fontWeight: 'bold', padding:'4% 0'}}>
          등록된 매장이 없습니다.</div>}

      {!loading && stores && (
        <div>
         {stores.map(store => (
          <StoreItem store={store} key={store.id} />
        ))}
        </div>
      )}

    </StoreListBlock>
  );
};

export default StoreList;