import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";

import Title from "./Title";

const TABLE_HEAD = [
  {
    label: "Date",
  },
  {
    label: "Name",
  },
  {
    label: "Ship To",
  },
  {
    label: "Payment Method",
  },
  {
    label: "Sale Amount",
    style: {
      align: "right",
    },
  },
];

export default function Orders({ orders }) {
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {TABLE_HEAD.map((item) => (
              <TableCell key={item} {...item?.style}>
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.shipTo}</TableCell>
              <TableCell>{item.paymentMethod}</TableCell>
              <TableCell align="right">{`${item.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link href="#" onClick={(e) => e.preventDefault()}>
        <a>
          <Typography color="primary" sx={{ mt: 3 }}>See more orders</Typography>
        </a>
      </Link>
    </>
  );
}

Orders.propTypes = {
	orders: PropTypes.array
};

Orders.defaultProps = {
	orders: []
};