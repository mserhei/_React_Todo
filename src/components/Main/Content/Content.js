import React from 'react';
import ContentAddTask from './ContentAddTask/ContentAddTask';
import ContentTasks from './ContentTasks/ContentTasks';

function Content (tasks) {
    return (
        <div>
            <ContentAddTask />
            <ContentTasks tasks={tasks}/>
        </div>
    )
}

export default Content;