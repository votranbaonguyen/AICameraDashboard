import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getMonthReportApi, getYearReportApi } from "../../utils/api/report";


const initialState = {
  loading: false,
  yearReport: [],
  monthReport: []
};

export const getYearReport = createAsyncThunk(
  "report/getYearReport",
  async (year) => {
    let res;
    res = await axios({
      url: getYearReportApi(year),
      method: "GET"
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res.data.data;
  }
);

export const getMonthReport = createAsyncThunk(
  "report/getMonthReport",
  async ({month,year}) => {
    let res;
    res = await axios({
      url: getMonthReportApi(month,year),
      method: "GET"
    });
    
    res = JSON.stringify(res);
    res = JSON.parse(res);
    console.log(res)
    return res.data.data;
  }
);


export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getYearReport.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getYearReport.fulfilled, (state, action) => {
      state.yearReport = action.payload
      state.loading = false;
  
    });

    builder.addCase(getYearReport.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getMonthReport.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getMonthReport.fulfilled, (state, action) => {
      console.log(action.payload)
      state.monthReport = action.payload
      state.loading = false;
  
    });

    builder.addCase(getMonthReport.rejected, (state) => {
      state.loading = false;
    });
  
  },
});

// Action creators are generated for each case reducer function
export const {} = reportSlice.actions;

export default reportSlice.reducer;
