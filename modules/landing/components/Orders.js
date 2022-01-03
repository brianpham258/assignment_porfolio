import React, { useState } from "react";
import PropTypes from "prop-types";
import { TableRow, TableCell, Button } from "@mui/material";

import { BasicTable } from "@core/table";
import { Title } from "@core/title";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Title>Recent Orders</Title>
      <div style={{ overflow: "hidden", maxHeight: isExpanded ? "100%" : 200 }}>
        <BasicTable size="small" tableHead={TABLE_HEAD}>
          {orders.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.ship_to}</TableCell>
              <TableCell>{item.payment_method}</TableCell>
              <TableCell align="right">{`${item.amount}`}</TableCell>
            </TableRow>
          ))}
        </BasicTable>
      </div>

      <Button
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "See less" : "See more orders"}
      </Button>
    </>
  );
}

Orders.propTypes = {
  orders: PropTypes.array,
};

Orders.defaultProps = {
  orders: [],
};
