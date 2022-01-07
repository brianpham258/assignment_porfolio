import React, { useState } from "react";
import PropTypes from "prop-types";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";

import PageTopNav from "./PageTopNav";
import PageSideNav from "./PageSideNav";

const mdTheme = createTheme();
const drawerWidth = 240;

export default function PageLayout({ children }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <CssBaseline />

        <PageTopNav
          drawerWidth={drawerWidth}
          open={open}
          onClick={toggleDrawer}
        />
        <PageSideNav
          drawerWidth={drawerWidth}
          open={open}
          onClick={toggleDrawer}
        />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
					{children}
				</Box>
      </Box>
    </ThemeProvider>
  );
}

PageLayout.propTypes = {
  children: PropTypes.any,
};

PageLayout.defaultProps = {
  children: undefined,
};
