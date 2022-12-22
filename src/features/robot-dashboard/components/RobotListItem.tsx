import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import React, { useState } from "react";
import { Robot } from "../../../types/Robot.types";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useGetRobotQuery } from "../../../services/RobotDashboard.api";

const RobotListItem = ({
  name,
  id,
}: Pick<Robot, "name" | "id">): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: robot } = useGetRobotQuery(id, {
    skip: !isOpen,
  });

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <ListItem
      sx={{
        height: 90,
      }}
    >
      <ListItemButton onClick={handleToggle}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: lightBlue[500] }}>
            <SmartToyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="body1">Name: {name}</Typography>
        </ListItemText>
        <Collapse in={isOpen && Boolean(robot)} timeout="auto" unmountOnExit>
          <Typography>Number of Arms: {robot?.numberOfArms}</Typography>
          <Typography>ID: {robot?.id}</Typography>
        </Collapse>
      </ListItemButton>
    </ListItem>
  );
};

export default RobotListItem;
