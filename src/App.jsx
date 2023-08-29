import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";

function App() {
  const { darkMode } = useTodo();

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <Header />
        <Tabs />
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
