import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StoreList from "../../components/store/StoreList";
import { findStores } from "../../modules/stores";

const StoreListContainer = () => {
    const dispatch = useDispatch();
    const { stores, error, loading } = useSelector(
      ({ stores, loading}) => ({
        stores: stores.stores,
        error: stores.error,
      }),
    );
    useEffect(() => {
      dispatch(findStores());
    }, [dispatch]);
  
    return (
      <>
      <StoreList
        error={error}
        stores={stores}
      />
      </>
    );
}

export default withRouter(StoreListContainer);