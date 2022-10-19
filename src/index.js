import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TomatoTalk from './components/talk/TomatoTalk';
import "@fortawesome/fontawesome-free/js/all.js";
import { legacy_createStore } from "redux";
import { Provider } from 'react-redux';
import ReduxApp from './ReduxApp';
import reducer from "./store";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(reducer)
// store에 담긴상태정보 확인하기
console.log(store.getState());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxApp />
      {/* <TomatoTalk /> */}
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);