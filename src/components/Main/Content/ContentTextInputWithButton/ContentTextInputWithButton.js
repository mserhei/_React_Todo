import React from "react";

import s from './ContentTextInputWithButton.module.css';

const ContentTextInputWithButton = () => {
  return (
    <div>
      <input
        className={s.tiwb__input}
        type="text"
        placeholder="text input with button ..."
      />
      <button className={s.tiwb__button}>add</button>
    </div>
  );
};

export default ContentTextInputWithButton;
