import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Confirm from '../../components/store/Confirm';

const ConfirmContainer = () => {
    const { order, userName, loading } = useSelector(({ order, auth, loading }) => ({
        order: order.order,
        userName: auth.auth.result.name,
        loading: loading['order/ORDER'],
      }));

      // Check if order exists before accessing its properties
  if (!order) {
    return <div>Loading...</div>; // or any other fallback behavior
  }

      const formattedDate = new Date(order.orderDate).toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });


  
    return (
      <>
      <Confirm
        order={order}
        date = {formattedDate}
        userName = {userName}
        loading={loading}
      />
      </>
    );
}

export default withRouter(ConfirmContainer);