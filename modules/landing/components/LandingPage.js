import React from "react";

import { Toolbar, Container, Grid, Paper } from "@mui/material";

import Chart from "./Chart";
import Deposits from "./Deposits";
import OrdersContainer from "../containers/OrdersContainer";
import DataGridOrdersContainer from "../containers/DataGridOrdersContainer";

export default function LandingPage() {
  return (
    <>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Deposits />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <OrdersContainer />
            </Paper>
          </Grid>

					<Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <DataGridOrdersContainer />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
