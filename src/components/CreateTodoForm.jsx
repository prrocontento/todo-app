import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { TodoContext } from "../context";

export function CreateTodoForm(props) {
  const { setNewValue, open, handleClose, newValue } = useContext(TodoContext);
  const handleChange = (event) => setNewValue(event.target.value);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "black",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add new TODO item
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Create a new todo item and add it to your todo's list
        </Typography>
        <TextField
          onChange={handleChange}
          value={newValue}
          fullWidth
          id="outlined-basic"
          sx={{ margin: "20px 0px" }}
        />

        <Stack direction="row" justifyContent={"flex-end"} spacing={2}>
          <Button
            onClick={handleClose}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Cancel
          </Button>
          <Button
            onClick={props.createItem}
            variant="contained"
            endIcon={<AddCircleIcon />}
          >
            Add Item
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
