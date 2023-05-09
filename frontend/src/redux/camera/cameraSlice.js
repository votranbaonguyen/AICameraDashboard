import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addCameraApi, deleteCameraApi, getAllCameraApi, updateCameraApi } from "../../utils/api/camera";

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
    return res.data.data;
  }
);

export const addCamera = createAsyncThunk(
  "camera/addCamera",
  async (data) => {
    let res;
    res = await axios({
      url: addCameraApi(),
      method: "POST",
      data: data
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res
  }
);

export const updateCamera = createAsyncThunk(
  "camera/updateCamera",
  async (data) => {
    let res;
    res = await axios({
      url: updateCameraApi(),
      method: "PUT",
      data: data
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res
  }
);

export const deleteCamera = createAsyncThunk(
  "camera/deleteCamera",
  async (cameraId) => {
    let res;
    res = await axios({
      url: deleteCameraApi(cameraId),
      method: "DELETE"
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res
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
      state.listCamera = action.payload
      state.loading = false;
      state.isLogin = true;
    });

    builder.addCase(getAllCamera.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(addCamera.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addCamera.fulfilled, (state, action) => {
     
      state.loading = false;
    });

    builder.addCase(addCamera.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(updateCamera.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateCamera.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loading = false;
    });

    builder.addCase(updateCamera.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(deleteCamera.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteCamera.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loading = false;
    });

    builder.addCase(deleteCamera.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = cameraSlice.actions;

export default cameraSlice.reducer;
