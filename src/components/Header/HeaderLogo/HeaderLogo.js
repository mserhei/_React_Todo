import React from "react";

import s from './HeaderLogo.module.css';

function HeaderLogo() {
  return (
    <div>
      <h1 className={s.h1}>ToDo on React</h1>
      <p className={s.p}>by Serhei Mikhailov</p>
    </div>
  );
}

export default HeaderLogo;
