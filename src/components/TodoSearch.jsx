import React, { useContext } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { TodoContext } from "../context";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const handleChange = (event) => setSearchValue(event.target.value);
  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <InputLabel sx={{ color: "white" }}>Search task</InputLabel>
      <Input
        sx={{ background: "white" }}
        onChange={handleChange}
        value={searchValue}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "black" }} />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
