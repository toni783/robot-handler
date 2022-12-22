import { LoadingButton } from "@mui/lab";
import { Typography, Box, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useCreateRobotMutation } from "../../../services/RobotDashboard.api";

const AddRobotForm = (): JSX.Element => {
  const [createRobot, { isLoading: isCreatingRobot }] =
    useCreateRobotMutation();
  const [name, setName] = useState("");
  const [arms, setArms] = useState("");

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeArms = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArms(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name && arms) {
      createRobot({ name: name, numberOfArms: Number(arms) })
        .then((res) => {
          setName("");
          setArms("");
          alert("Robot Added!");
        })
        .catch(() => {
          alert("Unexpected Error!");
        });
    } else {
      alert("Please add all the required fields to submit!");
    }
  };
  return (
    <Fragment>
      <Typography component="h1" variant="h5">
        Add New Robot
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="robot-name"
          label="Robot Name"
          name="robot-name"
          autoComplete="robot-name"
          autoFocus
          value={name}
          onChange={onChangeName}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="robot-arms"
          label="Robot Arms"
          id="robot-arms"
          autoComplete="robot-arms"
          value={arms}
          type="number"
          onChange={onChangeArms}
        />

        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          {...(isCreatingRobot && { loading: true })}
        >
          Add Robot
        </LoadingButton>
      </Box>
    </Fragment>
  );
};

export default AddRobotForm;
