import { useCallback } from "react";
import { useDispatch } from "react-redux";

import * as actions from "../landingSlice";

const useLandingServices = () => {
  const dispatch = useDispatch();

  // selector
  const getOrders = (state) => state.landing.landingState.orders;

  // api
  const fetchOrders = useCallback(
    ({ options, includes }) => dispatch(actions.fetchOrders({ options, includes })),
    [dispatch]
  );

  return { getOrders, fetchOrders };
};

export default useLandingServices;
