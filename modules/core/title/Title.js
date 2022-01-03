import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export default function Title({ children }) {
  return (
    <Typography component="h1" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.any,
};

Title.defaultProps = {
  children: undefined,
};
