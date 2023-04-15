import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllCameraApi } from "../../utils/api/camera";

const initialState = {
  loading: false,
  listCamera: [],
};

export const getAllCamera = createAsyncThunk(
  "camera/getallcamera",
  async () => {
    let res;
    res = await axios({
      url: getAllCameraApi(),
      method: "GET"
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res.data;
  }
);

export const cameraSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCamera.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllCamera.fulfilled, (state, action) => {
        console.log(action.payload)
      state.listCamera = action.payload
      state.isLogin = true;
    });

    builder.addCase(getAllCamera.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = cameraSlice.actions;

export default cameraSlice.reducer;
