import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StoreList from "../../components/store/StoreList";
import { findStores } from "../../modules/stores";

const StoreListContainer = () => {
    const { stores, error, loading } = useSelector(
      ({ stores, loading}) => ({
        stores: stores.stores,
        error: stores.error,
        loading: loading['stores/FIND_STORES']
      }),
    );
  
    return (
      <>
      <StoreList
        error={error}
        stores={stores}
        loading={loading}
      />
      </>
    );
}

export default withRouter(StoreListContainer);