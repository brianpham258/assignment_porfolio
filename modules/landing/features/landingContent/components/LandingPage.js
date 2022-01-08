import React from "react";

import { Toolbar, Container, Grid, Paper } from "@mui/material";

import { StudentListContainer } from '@students/features';

export default function LandingPage() {
  return (
    <>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3} justifyContent="center">
					<Grid item xs={10}>
            <Paper sx={{ p: 3, display: "flex", flexDirection: "column", borderRadius: 5 }}>
							<StudentListContainer />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
