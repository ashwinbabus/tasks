import React, { useState } from "react";
import "./task-container.styles.scss";

import AddTask from "../add-task/add-task.component";
import TaskForm from "../task-form/task-form.component";
import Task from "../task-element/task-element.component";

import { connect } from "react-redux";

const Tasks = ({ tasks }) => {

  console.log("Task container : ", tasks);

  const changeFormView = () => {
    setShowForm(!showForm);
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="tasks__container">
      <AddTask  count={tasks.length} changeFormView={changeFormView} />

      {showForm && <TaskForm isEditing={false} changeFormView={changeFormView} />}

      {tasks && tasks.length
        ? tasks.map((task) => (
            <Task
              description={task.task_msg}
              date={task.task_date}
              time={task.task_time}
              key={task.id}
              id={task.id}
            />
          ))
        : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});


export default connect(mapStateToProps)(Tasks);
