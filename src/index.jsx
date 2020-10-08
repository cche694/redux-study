import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import TodoList from "./TodoList/index.jsx";
import { Provider } from "react-redux";
import store from "./Store";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <TodoList />
        </Provider>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
