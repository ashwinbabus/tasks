import React, { useState } from "react";
import { connect } from "react-redux";
import { addTaskStart, deleteTask, updateTaskStart } from "../../redux/actions";
import { selectUserId, selectUserName } from "../../redux/selectors/user.selectors";
import "./task-form.styles.scss";

function TaskForm(props) {
  const {
    token,
    desc,
    date_prop,
    time_prop,
    isEditing,
    id,
    addNewTask,
    updateTask,
    deleteTask,
    setshowEdit,
    user_id,
    changeFormView,
    user_name
  } = props;

  const [description, setDescription] = useState(desc ? desc : "");
  const [date, setDate] = useState(date_prop ? date_prop : "");
  const [time, setTime] = useState(time_prop ? time_prop : "");

  const saveTask = () => {
    addNewTask({ token, description, date, time, user_id });
  };

  const updateTaskFunc = () => {
    updateTask({ token, description, date, time, id, user_id });
  };

  const handleDelete = () => {
    deleteTask({ token, id });
    setshowEdit();
  };

  const handleTime = (e) => {
    let t = e.target.value.split(":");
    let sec = +t[0] * 60 * 60 + +t[1] * 60;
    setTime(sec);
  };

  const changeTime = (time) => {
    let hours = Math.floor(time / 3600);
    let secs = time % 3600;
    let mins = Math.floor(secs / 60);
    return mins < 10 ? `${hours}:0${mins}` : `${hours}:${mins}`;
  };

  return (
    <div className="task-form__container">
      <div className="task__description mg">
        <h4>Task Description</h4>
        <input
          type="text"
          name="description"
          id=""
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      <div className="task__when mg">
        <div className="date">
          <h4>Date</h4>
          <input
            type="date"
            name="description"
            id=""
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div className="time">
          <h4>Time</h4>
          <input
            type="time"
            name=""
            id=""
            onChange={(e) => handleTime(e)}
            value={changeTime(time)}
          />
        </div>
      </div>

      <div className="task__user mg">
        <h4>Assign User</h4>
        <select name="user" id="">
          <option value="name">{user_name}</option>
        </select>
      </div>

      <div className="task__buttons">
        {isEditing ? (
          <img
            src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png"
            onClick={() => handleDelete()}
            alt="del"
          />
        ) : (
          <div />
        )}

        <div className="save">
          <button
            type="button"
            className="button"
            onClick={() => isEditing? setshowEdit() : changeFormView()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="button btn_green"
            onClick={() => {
              if (isEditing) {
                updateTaskFunc();
                setshowEdit();
              } else {
                saveTask();
                changeFormView();
              }
              
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.token,
  user_id: selectUserId(state),
  user_name: selectUserName(state)
});

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (obj) => dispatch(addTaskStart(obj)),
  updateTask: (obj) => dispatch(updateTaskStart(obj)),
  deleteTask: (obj) => dispatch(deleteTask(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
