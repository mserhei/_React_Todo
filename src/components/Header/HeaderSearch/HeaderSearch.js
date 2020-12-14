import React from 'react';

import s from './HeaderSearch.module.css';

function HeaderSearch () {
    return (
        <form>
            <div className={s.show_done_block}>
                <input className={s.show_done_checkbox} id="checkbox_done" type="checkbox"/>
                <label htmlFor="checkbox_done">Show done</label>
            </div>
            
            <div className={s.search_block}>
                <input className={s.search_input} type="search" placeholder="search..."/>
                <button className={s.search_button}>clear</button>
            </div>
        </form>
    )
}

export default HeaderSearch;