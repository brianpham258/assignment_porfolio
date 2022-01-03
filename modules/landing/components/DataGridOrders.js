import React from "react";
import PropTypes from "prop-types";

import { Title } from '@core/title';
import { DataGridTable } from "@core/table";

export default function DataGridOrders({ rows, columns }) {
  return (
    <>
      <Title>Recent Orders</Title>
      <DataGridTable rows={rows} columns={columns} checkboxSelection />
    </>
  );
}

DataGridOrders.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};
