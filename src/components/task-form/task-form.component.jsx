import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { addTaskStart, deleteTask, updateTaskStart } from "../../redux/actions";
import {
  selectUserId,
  selectUserName,
} from "../../redux/selectors/user.selectors";
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
    user_name,
  } = props;

  const [description, setDescription] = useState(desc ? desc : "");
  const [date, setDate] = useState(date_prop ? date_prop : "");
  const [time, setTime] = useState(time_prop ? time_prop : "");
  const hours = [
    "12:00am",
    "12:30am",
    "1:00am",
    "1:30am",
    "2:00am",
    "2:30am",
    "3:00am",
    "3:30am",
    "4:00am",
    "4:30am",
    "5:00am",
    "5:30am",
    "6:00am",
    "6:30am",
    "7:00am",
    "7:30am",
    "8:00am",
    "8:30am",
    "9:00am",
    "9:30am",
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "12:00pm",
    "12:30pm",
    "1:00pm",
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
    "4:30pm",
    "5:00pm",
    "5:30pm",
    "6:00pm",
    "6:30pm",
    "7:00pm",
    "7:30pm",
    "8:00pm",
    "8:30pm",
    "9:00pm",
    "9:30pm",
    "10:00pm",
    "10:30pm",
    "11:00pm",
    "11:30pm",
  ];
  const [activeTime, setActiveTime] = useState(null);
  const [showTimeDrop, setShowTimeDrop] = useState(false);
  const [showUserDrop, setShowUserDrop] = useState(false);

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

  const timeUtil = (string) => {
    let time = string.split(":");
    let hours = +time[0];
    let mins = +time[1].slice(0, 2);
    let meridiem = time[1].slice(2);
    hours = meridiem === "am" ? hours : hours + 12;
    let seconds = +hours * 60 * 60 + +mins * 60;
    return seconds;
  };

  const handleSelectTime = (e) => {
    setActiveTime(e.target.innerText);
    let secs = timeUtil(e.target.innerText);
    setTime(secs);
    setShowTimeDrop(false);
  };

  const handleTimeTextInput = (e) => {
    console.log(e.target.value);
  };

  const handleUserChange = () => {};

  const changeTime = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let meridien = hours > 12 ? "pm" : "am";
    hours = hours > 12 ? hours - 12 : hours;
    let secs = seconds % 3600;
    let mins = Math.floor(secs / 60);
    return hours === 0
      ? ""
      : mins < 10
      ? `${hours}:0${mins}${meridien}`
      : `${hours}:${mins}${meridien}`;
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowTimeDrop(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function DropWrapper(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return <div ref={wrapperRef}> {props.children} </div>;
  }

  return (
    <div className="task-form__container">
      <div className="task__description mg">
        <h4>Task Description</h4>
        <input
          className="description_input"
          type="text"
          name="description"
          id="description"
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
        <div className="time" onFocus={() => setShowTimeDrop(true)}>
          <h4>Time</h4>
          <input
            type="text"
            className="time_input"
            onChange={handleTimeTextInput}
            placeholder="Time"
            value={changeTime(time)}
          />
          {showTimeDrop && (
            <DropWrapper>
              <div className="timepicker">
                <ul style={{ cursor: "pointer" }}>
                  {hours.map((hour) => (
                    <li
                      style={{ padding: "3px 15px 3px 5px" }}
                      key={hour}
                      className={
                        activeTime === hour
                          ? "active_time time_list"
                          : "time_list"
                      }
                      onClick={(e) => handleSelectTime(e)}
                    >
                      {hour}
                    </li>
                  ))}
                </ul>
              </div>
            </DropWrapper>
          )}
        </div>
      </div>

      <div className="task__user mg">
        <h4>Assign User</h4>

        <input
          type="text"
          className={"user__search"}
          value={user_name}
          onFocus={() => setShowUserDrop(true)}
          onBlur={() => setShowUserDrop(false)}
          onChange={handleUserChange}
        />
        {showUserDrop && (
          <div className="user_list">
            <ul>
              <li>{user_name}</li>
            </ul>
          </div>
        )}
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
            onClick={() => (isEditing ? setshowEdit() : changeFormView())}
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
  user_name: selectUserName(state),
});

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (obj) => dispatch(addTaskStart(obj)),
  updateTask: (obj) => dispatch(updateTaskStart(obj)),
  deleteTask: (obj) => dispatch(deleteTask(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
