import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import ContentTasks from './ContentTasks/ContentTasks';

import s from './Content.module.css';

function Content ({openModal}) {

    // const allTasks = useSelector(state => state.tasks)

    return (
        <div>
            <ContentTasks openModal={openModal}/>
        </div>
    )
}

Content.propTypes = {
    openModal: PropTypes.func.isRequired,
}

export default Content;