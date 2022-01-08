import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import core from "@core/reducer";
import studentList from '@students/reducer';

const combinedReducer = combineReducers({
	core,
	students: studentList
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    return nextState;
  }
  return combinedReducer(state, action);
};

export default reducer;
