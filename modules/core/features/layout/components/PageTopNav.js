import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import { Toolbar, IconButton, Typography } from "@mui/material";

import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function PageTopNav({ drawerWidth, open, onClick }) {
  return (
    <AppBar position="absolute" open={open} drawerWidth={drawerWidth}>
      <Toolbar sx={{ pr: 24 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onClick}
          sx={{ marginRight: 5, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>

        <Link href="/">
          <a>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

PageTopNav.propTypes = {
  drawerWidth: PropTypes.number,
  open: PropTypes.bool,

  onClick: PropTypes.func,
};

PageTopNav.defaultProps = {
  drawerWidth: 240,
  open: false,

  onClick: () => {},
};
