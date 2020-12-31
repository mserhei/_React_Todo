import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import s from './Progressbar.module.css';

function Progressbar () {

    const tasks = useSelector(state => {
        const allTasks = state.tasks.tasks;
        const categoryIdList = state.categoryIdList.categoryIdList;
        
        return allTasks.filter(task => task.idCategoriesList.includes(categoryIdList[categoryIdList.length - 1]))
    })

    const [completion, setCompletion] = useState(0);
    const [completionColor, setCompletionColor] = useState('');
    
    const completionStyle = {
        width: `${completion}%`,
        backgroundColor: `#${completionColor}`,
    }

    function checkColor () {
        if (completion < 30) {
            setCompletionColor('ff0000');
        } else if (completion > 60) {
            setCompletionColor('1ac200'); 
        } else {
            setCompletionColor('f7db00'); 
        }
    }

    function calcCompletion () {
        let tasksCount = 0;
        tasksCount = tasks.length;
        let tasksCompletedCount = 0;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].completed) {
                tasksCompletedCount = tasksCompletedCount + 1;
            }
        }
        setCompletion(Math.round(tasksCompletedCount/tasksCount * 100));
    }

    useEffect(() => {
        checkColor();
        calcCompletion();  
    })
        
    return (
        <div className={s.full_line}>
            <div className={s.completed_line} style={completionStyle}>
                <span className={s.completed_percent}>{`${completion}%`}</span>
            </div>
        </div>
    )
}

export default Progressbar;