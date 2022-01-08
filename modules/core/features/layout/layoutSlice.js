import { createSlice } from "@reduxjs/toolkit";

const sliceName = "layout";

const INITIAL_STATE = {
  ln: null,
};

const slice = createSlice({
  name: sliceName,
  initialState: INITIAL_STATE,
  reducers: {
    setLanguage: (state, { payload }) => {
        state.ln = payload
    }
  }
});

const { setLanguage } = slice.actions;
export { setLanguage };

export default slice.reducer;
