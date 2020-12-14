import React from 'react';
import ContentTextInputWithButton from './ContentTextInputWithButton/ContentTextInputWithButton'
import ContentTasks from './ContentTasks/ContentTasks';

function Content () {
    return (
        <div>
            <ContentTextInputWithButton/>
            <ContentTasks />
        </div>
    )
}

export default Content;