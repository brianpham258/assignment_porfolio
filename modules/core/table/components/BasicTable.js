import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";

export default function BasicTable({ size, tableHead, children, ...tableProps }) {
  if (!tableHead || !children) return null;

  return (
    <Table size={size} {...tableProps}>
      <TableHead>
        <TableRow>
          {tableHead.map((item) => (
            <TableCell key={item} {...item?.style}>
              {item.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {children}
      </TableBody>
    </Table>
  );
}

BasicTable.propTypes = {
  size: PropTypes.string,
  tableHead: PropTypes.array,
  children: PropTypes.any
};

BasicTable.defaultProps = {
  size: 'small',
  tableHead: [],
  children: undefined
};