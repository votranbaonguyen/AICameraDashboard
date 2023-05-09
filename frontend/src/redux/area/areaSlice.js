import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllAreaApi } from "../../utils/api/area";


const initialState = {
  loading: false,
  listArea: [],
};

export const getAllArea = createAsyncThunk(
  "area/getallarea",
  async () => {
    let res;
    res = await axios({
      url: getAllAreaApi(),
      method: "GET"
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    console.log(res)
    return res.data.data;
  }
);

export const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllArea.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllArea.fulfilled, (state, action) => {
        console.log(action.payload)
      state.listArea = action.payload
      state.loading = false;
    });

    builder.addCase(getAllArea.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = areaSlice.actions;

export default areaSlice.reducer;
