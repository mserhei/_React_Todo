import React from 'react';
import ContentTasks from './ContentTasks/ContentTasks';

function Content ({openModal}) {
    return (
        <div>
            <ContentTasks openModal={openModal}/>
        </div>
    )
}

export default Content;