import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import Grid from "@mui/material/Grid";
import { CreateTodoForm } from "../components/CreateTodoForm";
import { Modal } from "../components/Modal";
import { TodoContext } from "../context";
import { useContext } from "react";
import { MessagePopup } from "../components/MessagePopup";

export function AppUI() {
  const {
    loading,
    error,
    todos,
    searchValue,
    completeTodo,
    deleteItem,
    handleOpen,
    createItem,
    newValue,
    popUp,
    handleClosePopUp,
  } = useContext(TodoContext);
  return (
    <div className="mainContainer">
      <Grid container className="headerSection" alignItems="flex-start">
        <TodoCounter />
      </Grid>
      <Grid container alignItems="center" sx={{ marginTop: "-95px" }}>
        <TodoSearch />
      </Grid>

      <Grid container justifyContent={"center"}>
        <TodoList>
          {todos
            .filter((todo) =>
              todo.text.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCheck={() => completeTodo(todo.text)}
                deleteItem={() => deleteItem(todo.text)}
              />
            ))}
        </TodoList>
        {loading && <>cargando 🤠</>}
        {error && <>error 🤠</>}
      </Grid>
      <Grid container justifyContent={"flex-end"} alignSelf={"flex-end"}>
        <CreateTodoButton onOpen={() => handleOpen()} />
        <CreateTodoForm createItem={() => createItem(newValue)} />
      </Grid>
      {todos.length === 0 && popUp && (
        <Modal>
          <MessagePopup onClose={() => handleClosePopUp()} />
        </Modal>
      )}
    </div>
  );
}
