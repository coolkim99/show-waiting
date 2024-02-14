import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findOrders } from '../../modules/myOrder';
import OrderList from '../../components/user/OrderList';

const OrderListContainer = () => {
    const dispatch = useDispatch();

    const { userId, orders, error, loading } = useSelector(
      ({ auth, myOrders, loading}) => ({
        userId: auth.auth.result.id,
        orders: myOrders.orders,
        loading: loading['myOrder/FIND_ORDERS']
      }),
    );

    useEffect(() => {
        console.log(userId);
        dispatch(findOrders(userId));
      }, [userId, dispatch]);
  
    return (
      <>
      <OrderList
        error={error}
        orders={orders}
        loading={loading}
      />
      </>
    );
}

export default withRouter(OrderListContainer);