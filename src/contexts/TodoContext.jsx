import { createContext, useState } from "react";

const TodoContext = createContext();
function TodoProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: "all" },
    { id: 1, name: "active" },
    { id: 2, name: "completed" },
  ];

  const dummyFunction = function () {
    console.log(
      "Dummy function inside app. If we pass this function to any child lets say c1 of app, re-rendering of app is going to cause c1 re-render no matter if it is memoized or not. To prevent this we can memoize this function by using useCallback. "
    );
  };

  return (
    <TodoContext.Provider
      value={{
        darkMode,
        setDarkMode,
        todos,
        setTodos,
        activeTab,
        setActiveTab,
        tabs,
        dummyFunction,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
