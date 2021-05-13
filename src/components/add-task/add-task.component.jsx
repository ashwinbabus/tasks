import React from "react";
import './add-task.styles.scss';

export default function AddTask({changeFormView , count}) {
  return (
    <div className="add_task__container">

      <div className="add_task__title">
        <h4 className="add_task__title__title">TASKS</h4>
        <h4 className="add_task__title__title">{count}</h4>
      </div>

      <div className="add_task__action" onClick={() => changeFormView()}>
          <h4>+</h4>
      </div>

    </div>
  );
}
  