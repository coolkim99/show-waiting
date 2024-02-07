import React, {useEffect} from "react";
import DoneOrders from "../../components/storeOrder/DoneOrders";
import NewOrders from "../../components/storeOrder/NewOrders";
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { findOrdering, findDone } from "../../modules/orders";

const OrdersContainer = () => {
    const dispatch = useDispatch();

    const { authId, ordering, done, error, orderloading, doneloading, process } = useSelector(
        ({ orders, auth, loading, process}) => ({
            ordering: orders.ordering,
            done: orders.done,
          error: orders.error,
          orderloading: loading['orders/FIND_ORDERING'],
          doneloading: loading['orders/FIND_DONE'],
          authId: auth.auth.result.id,
          process: process
        }),
      );

      useEffect(() => {
        dispatch(findDone(authId));
        dispatch(findOrdering(authId));
      }, [dispatch, authId]);
    

    return (
        <>
        {!orderloading && !doneloading &&
        <>
        <NewOrders orderings={ordering} loading={orderloading}/>
        <DoneOrders dones={done} loading={doneloading}/>
        </>
        }
        </>
    )
}

export default withRouter(OrdersContainer);