import React,{useState} from "react";

import s from './ContentAddTask.module.css';



function ContentAddTask() {

  const [addButton, setAddButton] = useState('button_add_task');
  const [form, setForm] =useState('hide');

  function hideAddButton () {
    setAddButton('hide');
    setForm('content_add_task');
  }

  function hideForm () {
    setAddButton('button_add_task');
    setForm('hide');
  }

  return (
    <div >
      <button className={s[addButton]}onClick={() => hideAddButton()}>add task</button>
        
      <form className={s[form]}>
        <label className={s.label_info}>Task name:</label><br />
        <input className={s.input_info} type="textarea" readOnly placeholder='enter the task name here'></input><br />
        <label className={s.label_info}>Description:</label><br />
        <input className={s.input_info} type="textarea" readOnly placeholder='enter task description here'></input><br />
        
        <input className={s.input_urgency} id='input_urgent' type='radio' name='set_urgency'/>
        <label className={s.label_urgency} htmlFor='input_urgent'>urgent</label>
        <input className={s.input_urgency} id='input_not_urgent' type='radio' name='set_urgency'/>
        <label className={s.label_urgency} htmlFor='input_not_urgent'>not urgent</label>
        <input className={s.input_urgency} id='input_termless' type='radio' name='set_urgency'/>
        <label className={s.label_urgency} htmlFor='input_termless'>termless</label>

        <br/>
        <button onClick={() => hideForm()} className={s.button_ok}>Cancel</button>
        <button onClick={() => hideForm()} className={s.button_ok}>Save</button>
      </form>
    </div>
  );
}

export default ContentAddTask;
