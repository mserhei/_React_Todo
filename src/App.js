import React, {useState} from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ModalWindow from "./components/ModalWindow/ModalWindow";

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

  const [taskForModal, setTaskForModal] = useState({
    id: null,
    title: ``,
    description: '',
    completed: false,
    idCategoriesList: null,
  });
  let [isOpenedModal, setIsOpenedModal] = useState(false);

  const openModal = (task) => {
    setTaskForModal(task);
    setIsOpenedModal(!isOpenedModal);
  }

  return (
    <Provider store={store}>
      <div className={s.wrapper}>
        <Header />
        <Main openModal={openModal}/>
        <Footer />
      </div>
      <div>
        <ModalWindow taskForModal={taskForModal} isOpenedModal={isOpenedModal}/>
      </div>
    </Provider>
  );
}

export default App;
