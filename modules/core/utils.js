import { createAsyncThunk as reduxCreateAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";

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

export const getIncludeQuery = (includes = [], options = {}) => {
  const queryObj = { ...options };

  if (includes) {
    queryObj.include = includes.join(",");
  }

  const query = qs.stringify(queryObj);

  return query;
};
