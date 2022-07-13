import { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

const TodoContext = createContext();

function TodoProvider(props) {
  const [open, setOpen] = useState(false);
  const [popUp, setpopUp] = useState(true);
  const handleClosePopUp = () => setpopUp(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");

  const [newValue, setNewValue] = useState("");

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteItem = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const createItem = (title) => {
    if (title.length > 0) {
      const newIndex = { text: title, completed: false };
      const newTodos = [...todos];
      newTodos.push(newIndex);
      saveTodos(newTodos);
      handleClose();
      setNewValue("");
    } else {
      alert("no se puede añadir");
    }
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        newValue,
        open,
        error,
        searchValue,
        popUp,
        setpopUp,
        setSearchValue,
        setNewValue,
        completeTodo,
        deleteItem,
        createItem,
        handleOpen,
        handleClose,
        todos,
        handleClosePopUp,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
