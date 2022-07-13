import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export function CreateTodoButton(props) {
  return (
    <Fab
      color="primary"
      aria-label="add"
      variant="extended"
      sx={{ marginRight: "8px" }}
      onClick={props.onOpen}
    >
      <AddIcon sx={{ margin: "0 4px" }} />
      New task
    </Fab>
  );
}
