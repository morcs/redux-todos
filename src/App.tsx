import React, { Component } from "react";
import "./App.css";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import Todos from "./components/App";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todos />
      </Provider>
    );
  }
}

export default App;
