// userReducer.js
import { act } from 'react-test-renderer';
import { SAVE_USER_DATA } from './userActions';

const initialState = {
  userData: [], //always array
};

const userReducer = (state = initialState, action) => {
 console.log("stateredu", state.userData, action)
    switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;