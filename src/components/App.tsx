/* eslint-disable react/jsx-no-undef */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoContext from "../contexts/TodoContext";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo"

const App = () => {
  return (
    <TodoContext className="uk-light">
      <Router>
      <Navbar></Navbar>
      <div className="uk-container">
        <Switch>
          <Route path="/create">
           <AddTodo></AddTodo>
          </Route>
          <Route path="/">
            <h4>Minha lista de tarefas</h4>
            <TodoList></TodoList>
          </Route>
        </Switch>
      </div>
      </Router>
    </TodoContext>
  );
};

export default App;
