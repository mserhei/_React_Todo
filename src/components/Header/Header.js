import React from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearch from './HeaderSearch/HeaderSearch';

import s from './Header.module.css';


function Header () {
    return (
        <header className={s.header}>
            <HeaderLogo />
            <HeaderSearch />
        </header>
    )
}

export default Header;