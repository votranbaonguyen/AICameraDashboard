import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllAlertApi } from "../../utils/api/alert";


const initialState = {
  loading: false,
  alertList: [],
};

export const getAllAlert = createAsyncThunk(
  "alert/getAllAlert",
  async () => {
    let res;
    res = await axios({
      url: getAllAlertApi(),
      method: "GET"
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res.data.data;
  }
);

// export const addCamera = createAsyncThunk(
//   "camera/addCamera",
//   async (data) => {
//     let res;
//     res = await axios({
//       url: addCameraApi(),
//       method: "POST",
//       data: data
//     });
//     res = JSON.stringify(res);
//     res = JSON.parse(res);
//     return res
//   }
// );

// export const updateCamera = createAsyncThunk(
//   "camera/updateCamera",
//   async (data) => {
//     let res;
//     res = await axios({
//       url: updateCameraApi(),
//       method: "PUT",
//       data: data
//     });
//     res = JSON.stringify(res);
//     res = JSON.parse(res);
//     return res
//   }
// );

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


export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAlert.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllAlert.fulfilled, (state, action) => {
      state.alertList = action.payload
      state.loading = false;
      console.log(action.payload)
    });

    builder.addCase(getAllAlert.rejected, (state) => {
      state.loading = false;
    });

    // builder.addCase(addCamera.pending, (state) => {
    //   state.loading = true;
    // });

    // builder.addCase(addCamera.fulfilled, (state, action) => {
     
    //   state.loading = false;
    // });

    // builder.addCase(addCamera.rejected, (state) => {
    //   state.loading = false;
    // });

    // builder.addCase(updateCamera.pending, (state) => {
    //   state.loading = true;
    // });

    // builder.addCase(updateCamera.fulfilled, (state, action) => {
    //   console.log(action.payload)
    //   state.loading = false;
    // });

    // builder.addCase(updateCamera.rejected, (state) => {
    //   state.loading = false;
    // });

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
export const {} = alertSlice.actions;

export default alertSlice.reducer;
