import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import React from "react";
import MyCompany from "./MyCompany";
import RouteComp from "./RouteComp";

const Dashboard = () => {
  return (
    <>
      <h3>Dashboard</h3>
      <Container sx={{ background: "#EBEFF1" }}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <RouteComp />
          </Grid>
          <Divider />
          <Grid item xs={12} md={10}>
            <MyCompany />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
