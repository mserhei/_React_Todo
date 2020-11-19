import React,{useState} from 'react';

import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

import s from './Main.module.css';

function Main ({tasks, itemsState, itemsUrgency}) {

    return (
        <main className={s.main}>
            <Sidebar itemsState={itemsState} itemsUrgency={itemsUrgency}/>
            <Content tasks={tasks}/>
        </main>
    )
}



export default Main;