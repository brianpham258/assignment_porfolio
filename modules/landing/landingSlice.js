import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@core/utils";

import landingAPI from "./api.js";

const sliceName = "landing";

const INITIAL_STATE = {
  orders: [
    {
      id: 0,
      date: "16 Mar, 2019",
      name: "Elvis Presley",
      ship_to: "Tupelo, MS",
      payment_method: "VISA ⠀•••• 3719",
      amount: 312.44,
    },
    {
      id: 1,
      date: "16 Mar, 2019",
      name: "Paul McCartney",
      ship_to: "London, UK",
      payment_method: "VISA ⠀•••• 2574",
      amount: 866.99,
    },
    {
      id: 2,
      date: "16 Mar, 2019",
      name: "Tom Scholz",
      ship_to: "Boston, MA",
      payment_method: "MC ⠀•••• 1253",
      amount: 100.81,
    },
    {
      id: 3,
      date: "16 Mar, 2019",
      name: "Michael Jackson",
      ship_to: "Gary, IN",
      payment_method: "AMEX ⠀•••• 2000",
      amount: 654.39,
    },
    {
      id: 4,
      date: "15 Mar, 2019",
      name: "Bruce Springsteen",
      ship_to: "Long Branch, NJ",
      payment_method: "VISA ⠀•••• 5919",
      amount: 212.79,
    },
		{
      id: 5,
      date: "15 Mar, 2019",
      name: "Bruce Springsteen",
      ship_to: "Long Branch, NJ",
      payment_method: "VISA ⠀•••• 5919",
      amount: 212.79,
    },
		{
      id: 6,
      date: "15 Mar, 2019",
      name: "Bruce Springsteen",
      ship_to: "Long Branch, NJ",
      payment_method: "VISA ⠀•••• 5919",
      amount: 212.79,
    },
		{
      id: 7,
      date: "15 Mar, 2019",
      name: "Bruce Springsteen",
      ship_to: "Long Branch, NJ",
      payment_method: "VISA ⠀•••• 5919",
      amount: 212.79,
    },
		{
      id: 8,
      date: "15 Mar, 2019",
      name: "Bruce Springsteen",
      ship_to: "Long Branch, NJ",
      payment_method: "VISA ⠀•••• 5919",
      amount: 212.79,
    },
		{
      id: 9,
      date: "15 Mar, 2019",
      name: "Bruce Springsteen",
      ship_to: "Long Branch, NJ",
      payment_method: "VISA ⠀•••• 5919",
      amount: 212.79,
    },
		{
      id: 10,
      date: "15 Mar, 2019",
      name: "Bruce Springsteen",
      ship_to: "Long Branch, NJ",
      payment_method: "VISA ⠀•••• 5919",
      amount: 212.79,
    },
  ],
  loading: false,
  error: null,
};

export const fetchOrders = createAsyncThunk(
  `${sliceName}/fetchOrders`,
  ({ options, includes }) => landingAPI.fetchOrders({ options, includes })
);

const slice = createSlice({
  name: sliceName,
  initialState: INITIAL_STATE,
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.loading = true;
    },
    [fetchOrders.fullfiled]: (state, { payload }) => {
      state.loading = false;
      // state.orders = payload?.data?.data;
    },
    [fetchOrders.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export default slice.reducer;
