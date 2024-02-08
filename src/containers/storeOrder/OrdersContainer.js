import React, {useEffect} from "react";
import DoneOrders from "../../components/storeOrder/DoneOrders";
import NewOrders from "../../components/storeOrder/NewOrders";
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { findOrdering, findDone } from "../../modules/orders";
import { findStore } from "../../modules/store";

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


      const handleOrders = async (dispatch, authId) => {
        try {
          await dispatch(findOrdering(authId));
          await dispatch(findDone(authId));
          await dispatch(findStore(authId));
        } catch (error) {
          console.error(error);
        }
      };

      const fetchData = async () => {
        try {
              await handleOrders(dispatch, authId);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => { 
        console.log("orderContainer")       
        fetchData();
      }, [process, authId, dispatch]);

      // useEffect(() => {
      //   console.log("orderContainer")
      //   dispatch(findDone(authId));
      //   dispatch(findOrdering(authId));
      // }, [dispatch, authId, process]);
    

    return (
        <>
        {!orderloading && !doneloading && ordering != null && done != null &&
        <>
        <NewOrders orderings={ordering} loading={orderloading}/>
        <DoneOrders dones={done} loading={doneloading}/>
        </>
        }
        </>
    )
}

export default withRouter(OrdersContainer);