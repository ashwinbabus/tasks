import React, { useState } from "react";
import "./task-element.styles.scss";
import TaskForm from "../task-form/task-form.component";
import { createStructuredSelector } from "reselect";
import { selectUserImage } from "../../redux/selectors/user.selectors";
import { connect } from "react-redux";

function Task({ token, description, date, time, id, userImg }) {
  const [showEdit, setshowEdit] = useState(false);

  return (
    <div className="element-with-form">
      <div className="task-element__container">
        <div className="task-element__info">
          <img src={userImg} alt="pic" />
          <div className="info">
            <h5>{description}</h5>
            <h6 style={{ color: "red" }}>{date}</h6>
          </div>
        </div>

        <div className="task-element__actions">
          <div className="edit__icon" onClick={() => setshowEdit(!showEdit)}>
            <img
              src="https://img.icons8.com/ios/16/000000/edit--v1.png"
              alt="edit"
            />
          </div>
        </div>
      </div>

      {showEdit ? (
        <TaskForm
          token={token}
          desc={description}
          date_prop={date}
          time_prop={time}
          isEditing={true}
          id={id}
          setshowEdit={setshowEdit}
        />
      ) : null}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  userImg: selectUserImage,
});

export default connect(mapStateToProps)(Task);
