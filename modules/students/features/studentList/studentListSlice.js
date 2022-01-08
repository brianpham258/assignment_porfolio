import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@core/utils";

import studentsApi from "../../api";

const sliceName = "studentList";

const INITIAL_STATE = {
  students: [],
  loading: false,
  error: null,
};

export const fetchStudents = createAsyncThunk(`${sliceName}/fetchStudents`, () =>
studentsApi.fetchStudents()
);

const slice = createSlice({
  name: sliceName,
  initialState: INITIAL_STATE,
  reducers: {
    updateStudents: (state, { payload }) => {
      state.students = payload;
    }
  },
  extraReducers: {
    [fetchStudents.pending]: (state) => {
      state.loading = true;
    },
    [fetchStudents.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.students = payload?.data?.students;
    },
    [fetchStudents.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

const { updateStudents } = slice.actions;
export { updateStudents };

export default slice.reducer;
