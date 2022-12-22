import { Grid, Paper, Box } from "@mui/material";
import React from "react";
import AddRobotForm from "./components/AddRobotForm";
import RobotList from "./components/RobotList";

const RobotDashboard = (): JSX.Element => {
  return (
    <Box p={6}>
      <Grid container component={Paper} elevation={6} square>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AddRobotForm />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <RobotList />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RobotDashboard;
