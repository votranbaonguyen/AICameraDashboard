import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addAreaApi, deleteAreaApi, getAllAreaApi, updateAreaApi } from "../../utils/api/area";


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
    return res.data.data;
  }
);

export const addArea = createAsyncThunk(
  "area/addArea",
  async (data) => {
    let res;
    res = await axios({
      url: addAreaApi(),
      method: "POST",
      data: data
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res
  }
);

export const updateArea = createAsyncThunk(
  "area/updateArea",
  async (data) => {
    console.log(data)
    let res;
    res = await axios({
      url: updateAreaApi(),
      method: "PUT",
      data: data
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res
  }
);

export const deleteArea = createAsyncThunk(
  "area/deleteArea",
  async (areaId) => {
    let res;
    res = await axios({
      url: deleteAreaApi(areaId),
      method: "DELETE"
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res
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
     
      state.listArea = action.payload
      state.loading = false;
    });

    builder.addCase(getAllArea.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(addArea.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addArea.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(addArea.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(updateArea.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateArea.fulfilled, (state, action) => {
 
      state.loading = false;
    });

    builder.addCase(updateArea.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(deleteArea.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteArea.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loading = false;
    });

    builder.addCase(deleteArea.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = areaSlice.actions;

export default areaSlice.reducer;
