import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export default function Title({ children, variant }) {
  return (
    <Typography variant={variant} color="primary" gutterBottom>
      {children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string
};

Title.defaultProps = {
  children: undefined,
  variant: 'h3'
};
