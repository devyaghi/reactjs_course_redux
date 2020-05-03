import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterTest from "./CounterTest";
import {Provider} from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <CounterTest/>

    </Provider>
  );
}

export default App;
