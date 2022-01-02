import { createAsyncThunk as reduxCreateAsyncThunk } from "@reduxjs/toolkit";

export const createAsyncThunk = (actionType, requestFunc) =>
  reduxCreateAsyncThunk(actionType, async (payload, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await requestFunc(payload, thunkAPI);
      return response;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  });
