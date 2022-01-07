import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@core/utils";

import studentsApi from "../../api";

const sliceName = "studentList";

const INITIAL_STATE = {
  students: [],
  filteredStudents: null,
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
    setFilteredStudents: (state, { payload }) => {
      state.filteredStudents = payload;
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

const { setFilteredStudents } = slice.actions;
export { setFilteredStudents };

export default slice.reducer;
