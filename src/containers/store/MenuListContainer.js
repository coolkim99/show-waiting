import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findMenu, unloadMenu } from '../../modules/menu';
import MenuList from '../../components/store/MenuList';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { findStore } from '../../modules/store';
import MenuHeader from '../../components/common/MenuHeader';

const MenuListContainer = ({ match, history }) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  let { storeId, name } = match.params;
  storeId = Number(storeId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findMenu(storeId));
    dispatch(findStore(storeId)) ;
  }, [dispatch, storeId]);

  const { menu, error, store} = useSelector(({ menu, store}) => ({
    menu: menu.menuInfo,
    error: menu.error,
    store: store.store,
  }));
  return (
    <>
    <MenuHeader name={name}/>
    <MenuList menus={menu} error={error}  />
    </>
  );
};

export default withRouter(MenuListContainer);