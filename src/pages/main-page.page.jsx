import React, { useEffect } from "react";
import { connect } from "react-redux";
import Tasks from "../components/task-container/task-container.component";
import {fetchTokenStart} from "../redux/actions";
import "./main-page.styles.scss";

const MainPage = ({fetchToken}) => {
    
  useEffect(() => {
    console.log("app mounted");
    fetchToken();
  }, [fetchToken]);

  return (
    <div className="main-page__container">
      <div className="left__pane" />
      <div className="right__pane">
        <Tasks />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(fetchTokenStart()),
});

export default connect(null,mapDispatchToProps)(MainPage);
