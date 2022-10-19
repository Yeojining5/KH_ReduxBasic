import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TomatoTalk from './components/talk/TomatoTalk';
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css"
import { legacy_createStore } from "redux";
import { Provider } from 'react-redux';
import ReduxApp from './ReduxApp';
import reducer, { initAuth } from "./store";
import "./App.css";
import AuthLogic from './components/service/authLogic';
import firebaseApp from "./components/service/firebase"
import { BrowserRouter } from 'react-router-dom';
import ReduxRouterApp from './ReduxRouterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
const authLogic = new AuthLogic(firebaseApp);
const store = legacy_createStore(reducer)
store.dispatch(
  initAuth(authLogic.getUserAuth(), authLogic.getGoogleAuthProvider())
);
// store에 담긴상태정보 확인하기
console.log(store.getState());
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ReduxRouterApp />
        {/* <ReduxApp /> */}
        {/* <TomatoTalk /> */}
        {/* <App /> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);