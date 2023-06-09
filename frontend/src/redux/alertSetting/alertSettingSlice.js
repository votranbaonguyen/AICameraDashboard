import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addAlertSettingApi, getAllAlertSettingApi, updateAlertSettingApi } from "../../utils/api/alertSetting";


const initialState = {
  loading: false,
  listAlertSetting: [],
};

export const getAllAlertSetting = createAsyncThunk(
  "alertSetting/getAllAlertSetting",
  async () => {
    let res;
    res = await axios({
      url: getAllAlertSettingApi(),
      method: "GET"
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res.data.data;
  }
);

export const addAlertSetting = createAsyncThunk(
  "alertSetting/addAlertSetting",
  async (data) => {
    let res;
    res = await axios({
      url: addAlertSettingApi(),
      method: "POST",
      data: data
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res
  }
);

export const updateAlertSetting = createAsyncThunk(
  "alertSetting/updateAlertSetting",
  async (data) => {
    let res;
    res = await axios({
      url: updateAlertSettingApi(),
      method: "PUT",
      data: data
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res
  }
);

// export const deleteCamera = createAsyncThunk(
//   "camera/deleteCamera",
//   async (cameraId) => {
//     let res;
//     res = await axios({
//       url: deleteCameraApi(cameraId),
//       method: "DELETE"
//     });
//     res = JSON.stringify(res);
//     res = JSON.parse(res);
//     return res
//   }
// );


export const alertSettingSlice = createSlice({
  name: "alertSetting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAlertSetting.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllAlertSetting.fulfilled, (state, action) => {
      state.listAlertSetting = action.payload
      state.loading = false;
 
    });

    builder.addCase(getAllAlertSetting.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(addAlertSetting.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addAlertSetting.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loading = false;
    });

    builder.addCase(addAlertSetting.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(updateAlertSetting.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateAlertSetting.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loading = false;
    });

    builder.addCase(updateAlertSetting.rejected, (state) => {
      state.loading = false;
    });

    // builder.addCase(deleteCamera.pending, (state) => {
    //   state.loading = true;
    // });

    // builder.addCase(deleteCamera.fulfilled, (state, action) => {
    //   console.log(action.payload)
    //   state.loading = false;
    // });

    // builder.addCase(deleteCamera.rejected, (state) => {
    //   state.loading = false;
    // });
  },
});

// Action creators are generated for each case reducer function
export const {} = alertSettingSlice.actions;

export default alertSettingSlice.reducer;
