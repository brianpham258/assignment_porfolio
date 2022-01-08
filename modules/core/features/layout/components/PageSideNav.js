import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { FormattedMessage } from 'react-intl';

import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

import {
  Toolbar,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const MAIN_LIST_ITEMS = [
  {
    name: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
    url: "/",
  },
];

export default function PageSideNav({ drawerWidth, open, onClick }) {
  const renderMenuItem = (list) => {
    return list.map((item, index) => (
      <Link key={index} href={item.url}>
        <a>
          <ListItem button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={<FormattedMessage id={`layout.side_nav.${item.name}`} />} />
          </ListItem>
        </a>
      </Link>
    ));
  };

  return (
    <Drawer variant="permanent" open={open} drawerWidth={drawerWidth}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={onClick}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <div>{renderMenuItem(MAIN_LIST_ITEMS)}</div>
      </List>
      <Divider />
    </Drawer>
  );
}

PageSideNav.propTypes = {
  drawerWidth: PropTypes.number,
  open: PropTypes.bool,

  onClick: PropTypes.func,
};

PageSideNav.defaultProps = {
  drawerWidth: 240,
  open: false,

  onClick: () => {},
};
