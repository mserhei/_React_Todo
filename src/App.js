import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import s from "./App.module.css";

import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import { rootReducer } from './redux/rootReducer';

const logMiddleware = (store) => (next) => (action) => {
  next(action);
};

const store = createStore(rootReducer, compose(
  applyMiddleware(logMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

function App() {

  return (
    <Provider store={store}>
      <div className={s.wrapper}>
        <Header />
        <Main/>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
