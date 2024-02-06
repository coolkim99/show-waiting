import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/style/palette';
import { Link } from 'react-router-dom';

const StoreListBlock = styled(Responsive)`
  margin-top: 1rem;
`;

const StoreItemBlock = styled.div`
  border: 0.8px solid #d63f2b;
  border-radius : 5px;
  &:hover {
    background: lightgray;
    color: white;
    text-decoration: none;
    border: 0.8px solid white;
  }
  & + & {
    margin-top: 1rem;
  }

`;

const StoreLink = styled(Link)`
  color : black;
  text-decoration : none;
  padding : 10px;
  .orderarrow {
    font-weight : normal;
    color : gray;
  }
`


const StoreItem = ({ store }) => {
  const { storeId, name} = store;
  console.log(store, name);

  const str = name.toUpperCase();

  return (
    <StoreItemBlock>
      <h2>
        <StoreLink to={`/menuList/${storeId}/${name}`}>{str}
        </StoreLink>
      </h2>
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
        <div style={{fontSize: '1.5rem', fontWeight: 'bold', padding:'4% 0'}}>
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