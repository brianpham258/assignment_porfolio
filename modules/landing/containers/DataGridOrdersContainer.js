import React from "react";
import { useSelector } from "react-redux";

import DataGridOrders from "../components/DataGridOrders";
import useLandingServices from "../hooks/useLandingServices";

export default function DataGridOrdersContainer() {
  const { getOrders } = useLandingServices();
  const orders = useSelector((state) => getOrders(state));

  const columns = [
    {
      field: "date",
      headerName: "Date",
			width: 120
    },
    {
      field: "name",
      headerName: "Name",
			width: 200
    },
    {
      field: "ship_to",
      headerName: "Ship To",
			width: 200
    },
    {
      field: "payment_method",
      headerName: "Payment Method",
			width: 200
    },
    {
      field: "amount",
      headerName: "Sale Amount",
			width: 200
    },
  ];

  return <DataGridOrders rows={orders} columns={columns} />;
}
