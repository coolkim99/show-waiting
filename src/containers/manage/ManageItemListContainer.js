import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findMenu, unloadMenu } from '../../modules/menu';
import { findOrdering } from '../../modules/orders';
import { findStore } from '../../modules/store';
import styled from 'styled-components';
import Responsive from '../../components/common/Responsive';
import ManageItemList from '../../components/manage/ManageItemList';

const Span = styled(Responsive)`
    color : gray;
    margin-top : 20px;
    transform: translateX(30px);
`

const ManageItemListContainer = ({ match, history }) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  let { storeId, name } = match.params;
  storeId = Number(storeId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findStore(storeId));
    dispatch(findOrdering(storeId));
    dispatch(findMenu(storeId));
  }, [dispatch, storeId]);

  const { menu, error, store, loading} = useSelector(({ menu, store, loading}) => ({
    menu: menu.menuInfo,
    error: menu.error,
    store: store.store,
    loading: loading['menu/FIND_MENU']
  }));
  return (
    <>
    <Span>메뉴 리스트</Span>
    <ManageItemList menus={menu} error={error} loading={loading}  />
    </>
  );
};

export default withRouter(ManageItemListContainer);