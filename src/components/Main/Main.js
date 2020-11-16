import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

import s from './Main.module.css';

function Main () {
    return (
        <main className={s.main}>
            <Sidebar />
            <Content />
        </main>
    )
}

export default Main;