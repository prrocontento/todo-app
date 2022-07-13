import React from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export function TodoItem(props) {
  const itemContainer = {
    display: "grid",
    gridTemplateColumns: "0.2fr 2fr 1fr",
    gridTemplateRows: "1fr",
    alignItems: "center",
  };
  const textStyle = props.completed
    ? {
        textDecoration: "line-through",
      }
    : {};
  return (
    <li style={textStyle}>
      <div style={itemContainer}>
        <div>
          <Checkbox
            color="success"
            checked={props.completed}
            onChange={props.onCheck}
            sx={{ color: "white", justifySelf: "start" }}
          />
        </div>
        {props.text}

        <IconButton onClick={props.deleteItem} sx={{ justifySelf: "end" }}>
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
    </li>
  );
}
