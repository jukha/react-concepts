import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error("TodoContext was used outside the TodoProvider");
  return context;
}

export default useTodo;
