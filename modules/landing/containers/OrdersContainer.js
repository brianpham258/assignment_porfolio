import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import useLandingServices from "../hooks/useLandingServices";
import Orders from "../components/Orders";

export default function OrdersContainer() {
  const { fetchOrders, getOrders } = useLandingServices();

//   useEffect(() => {
//     const options = {
//         page: 1
//     };
//     const includes = ['abc', 'xyz'];

//     fetchOrders({ options, includes }).then((res) => {
//         console.log('res: ', res);
//     });
//   }, []);

  const orders = useSelector((state) => getOrders(state));

  return <Orders orders={orders} />;
}
