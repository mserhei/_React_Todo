import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import ContentTasks from './ContentTasks/ContentTasks';

import s from './Content.module.css';

function Content ({openModal}) {

    const allTasks = useSelector(state => state.tasks)

    return (
        <div>
            {!allTasks.length ? <p className={s.message_no_tasks}>there are no tasks for some reasons. you can create them in the "Categoies" area on the left...</p> : true}
            <ContentTasks openModal={openModal}/>
        </div>
    )
}

Content.propTypes = {
    openModal: PropTypes.func.isRequired,
}

export default Content;