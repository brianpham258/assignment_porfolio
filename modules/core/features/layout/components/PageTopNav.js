import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';

import { styled } from "@mui/material/styles";
import { Toolbar, IconButton, Typography, Button, Stack } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

import useLayoutServices from "../hooks/useLayoutServices";

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
  const { setLanguage } = useLayoutServices();

  const handleChangeLanguage = (language) => {
    sessionStorage.setItem("ln", language);
    setLanguage(language);
  };

  return (
    <AppBar position="absolute" open={open} drawerWidth={drawerWidth}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onClick}
          sx={{ marginRight: 5, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          <FormattedMessage id="layout.top_nav.dashboard" />
        </Typography>

        <Stack spacing={0} direction="row">
          <Button
            variant="text"
            size="small"
            onClick={() => handleChangeLanguage("vi")}
            style={{
              color: "#fff",
              fontSize: "1em",
              borderRight: "1px solid #fff",
              borderRadius: 0
            }}
          >
            VI
          </Button>
          <Button
            variant="text"
            size="small"
            onClick={() => handleChangeLanguage("en")}
            style={{ color: "#fff", fontSize: "1em", borderRadius: 0 }}
          >
            EN
          </Button>
        </Stack>
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
