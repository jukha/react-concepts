import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const log = useCallback(function log() {
    console.log(
      "Dummy function inside app. If we pass this function to any child lets say c1 of app, re-rendering of app is going to cause c1 re-render no matter if it is memoized or not. To prevent this we can memoize this function by using useCallback. "
    );
  }, []);

  const tabs = useMemo(() => {
    return [
      { id: 0, name: "all" },
      { id: 1, name: "active" },
      { id: 2, name: "completed" },
    ];
  }, []);

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <Header darkMode={darkMode} onToggleTheme={setDarkMode} />
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChangeActiveTab={setActiveTab}
          dummyFunction={log}
        />
        <AddTodo onAddTodo={setTodos} />
        <TodoList
          activeTab={activeTab}
          todos={todos}
          onChangeTodoStatus={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
