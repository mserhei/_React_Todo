import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setSearchData} from './../../../redux/actions';

import s from './HeaderSearch.module.css';

function HeaderSearch () {

    let [searchPhrase, setSearchPhrase] = useState({phrase: ''});
    let [isCheckedCompleted, setIsCheckedCompleted] = useState({isChecked: false});

    const dispatch = useDispatch();

    function sendSearchData () {
        dispatch(setSearchData({
            phrase: searchPhrase.phrase,
            isCompleted: isCheckedCompleted.isChecked,
        }))
    }

    function clearSearchInput() {
        setSearchPhrase({phrase: ''})
    }

    useEffect(() => {
        sendSearchData ();
    })

    return (
        <form
            onSubmit={(event) => {event.preventDefault(); clearSearchInput()}} 
        >
            <div className={s.show_done_block}>
                <input 
                    onChange={(event) => {setIsCheckedCompleted({isChecked: event.target.checked})}}
                    className={s.show_done_checkbox} id="checkbox_done" type="checkbox"/>
                <label htmlFor="checkbox_done">Show done</label>
            </div>
            
            <div className={s.search_block}>
                <input 
                    value={searchPhrase.phrase}
                    onChange={(event) => {setSearchPhrase({phrase: event.target.value})}}
                    className={s.search_input} type="search" placeholder="search..."/>
                <button
                    type='submit'
                    className={s.search_button}>clear
                </button>
            </div>
        </form>
    )
}

export default HeaderSearch;