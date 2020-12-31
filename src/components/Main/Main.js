import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import Progressbar from './Progressbar/Progressbar';

import s from './Main.module.css';

function Main ({openModal}) {

    return (
        <main>
            <div className={s.progressbar}>
                <Progressbar />
            </div>
            <div className={s.sidebar_and_content}>
                <Sidebar/>
                <Content openModal={openModal}/>
            </div>
            
        </main>
    )
}



export default Main;