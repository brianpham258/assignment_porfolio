import React from "react";
import PropTypes from "prop-types";

import { DataGrid } from "@mui/x-data-grid";

export default function DataGridTable({
  rows,
  columns,
  pageSize,
  rowsPerPageOptions,
  ...tableProps
}) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      rowsPerPageOptions={rowsPerPageOptions}
			style={{ minHeight: 400 }}
      {...tableProps}
    />
  );
}

DataGridTable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  pageSize: PropTypes.number,
  rowsPerPageOptions: PropTypes.array
};

DataGridTable.defaultProps = {
  pageSize: 5,
  rowsPerPageOptions: [5]
};
