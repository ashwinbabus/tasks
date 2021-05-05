import Actions from "./action.types";

const INITIAL_STATE = {
  token: "",
  user: {},
  tasks: [],
  token_error: "",
  user_error: "",
  tasks_error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // TOKEN

    case Actions.FETCH_TOKEN_START:
      return state;

    case Actions.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };

    case Actions.FETCH_TOKEN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // USER

    case Actions.FETCH_USER_START:
      return state;

    case Actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case Actions.FETCH_USER_FAILURE: {
      return {
        ...state,
        user_error: action.payload,
      };
    }

    // FETCH TASKS TASKS

    case Actions.FETCH_TASKS_START:
      return state;

    case Actions.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      };

    case Actions.FETCH_TASKS_FAILURE: {
      return {
        ...state,
        tasks_error: action.payload,
      };
    }

    // ADD TASKS

    case Actions.ADD_TASKS_START:
      return state;

    case Actions.ADD_TASKS_SUCCESS:
      return state;

    case Actions.ADD_TASKS_FAILURE: {
      return {
        ...state,
        tasks_error: action.payload,
      };
    }

    // UPDATE TASKS

    case Actions.UPDATE_TASKS_START:
      return state;

    case Actions.UPDATE_TASKS_SUCCESS:
      return state;

    case Actions.UPDATE_TASKS_FAILURE: {
      return {
        ...state,
        tasks_error: action.payload,
      };
    }

    // DELETE TASK

    case Actions.DELETE_TASKS:
      return state;

    case Actions.DELETE_TASKS_FAILURE:
      return {
        ...state,
        tasks_error : action.payload
      }

    default:
      return state;
  }
};

export default reducer;
