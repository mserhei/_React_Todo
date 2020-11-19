import React, { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import s from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: `Learn the basics of React`,
      description:
        "its a default description for title Learn the basics of React",
      completed: true,
      deleted: true,
    },
    {
      id: 1,
      title: `Learn React hooks`,
      description: ``,
      completed: false,
      deleted: false,
    },
    {
      id: 2,
      title: `Create a complex React application`,
      description:
        "its a default description for title Create a complex React application",
      completed: false,
      deleted: true,
    },
  ]);

  const [itemsUrgency, setItemsUrgency] = useState([
    { id: 0, title: "Urgent", checked: true},
    { id: 1, title: "Not urgent", checked: false},
    { id: 2, title: "Termless", checked: false},
  ]);

  const [itemsState, setItemsState] = useState([
    { id: 0, title: "Unremoved", checked: true},
    { id: 1, title: "Completed", checked: false},
    { id: 2, title: "Deleted", checked: false},
    { id: 3, title: "All" ,checked: false},
  ]);

  return (
      <div className={s.wrapper}>
        <Header />
        <Main tasks={tasks} itemsState={itemsState} itemsUrgency={itemsUrgency}/>
        <Footer />
      </div>
  );
}

export default App;
