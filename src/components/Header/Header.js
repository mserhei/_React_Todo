import React from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderChangeTheme from './HeaderChangeTheme/HeaderChangeTheme';

import s from './Header.module.css';


function Header () {
    return (
        <header className={s.header}>
            <HeaderLogo />
            <HeaderChangeTheme />
        </header>
    )
}

export default Header;