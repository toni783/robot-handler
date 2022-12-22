import { Typography, Box, List, Collapse } from "@mui/material";
import React, { Fragment } from "react";
import { TransitionGroup } from "react-transition-group";
import { useGetRobotsQuery } from "../../../services/RobotDashboard.api";
import RobotListItem from "./RobotListItem";

const RobotList = (): JSX.Element => {
  const { data: robotList, isLoading, isFetching } = useGetRobotsQuery();

  return (
    <Fragment>
      <Typography component="h1" variant="h5">
        Robot List
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxHeight: 300,
          overflow: "auto",
          borderRadius: "sm",
        }}
      >
        {isLoading || isFetching ? (
          <Typography align="center">Loading....</Typography>
        ) : robotList && robotList.length > 0 ? (
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            <TransitionGroup>
              {robotList.map((item) => (
                <Collapse key={item.id}>
                  <RobotListItem name={item.name} id={item.id} />
                </Collapse>
              ))}
            </TransitionGroup>
          </List>
        ) : (
          <Typography align="center">No results found....</Typography>
        )}
      </Box>
    </Fragment>
  );
};

export default RobotList;
