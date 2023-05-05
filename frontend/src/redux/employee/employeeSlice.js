import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllCameraApi } from "../../utils/api/camera";
import { addEmployeeApi, deleteEmployeeApi, getAllEmployeeApi, updateEmployeeApi } from "../../utils/api/employee";

const initialState = {
  loading: false,
  listEmployee: []
};

export const getAllEmployee = createAsyncThunk(
  "employee/getAllEmployee",
  async () => {
    let res;
    res = await axios({
      url: getAllEmployeeApi(),
      method: "GET"
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res.data.data;
  }
);

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (data) => {
    let res;
    res = await axios({
      url: addEmployeeApi(),
      method: "POST",
      data: data
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (data) => {
    let res;
    res = await axios({
      url: updateEmployeeApi(),
      method: "PUT",
      data: data
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    return res
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (employeeId) => {
    let res;
    res = await axios({
      url: deleteEmployeeApi(employeeId),
      method: "DELETE"
    });
    res = JSON.stringify(res);
    res = JSON.parse(res);
    console.log(res)
    return res
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEmployee.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(getAllEmployee.fulfilled, (state, action) => {
        state.listEmployee = action.payload
        state.loading = false
      });
  
      builder.addCase(getAllEmployee.rejected, (state) => {
        state.loading = false;
      });

      builder.addCase(addEmployee.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(addEmployee.fulfilled, (state) => {
        state.loading = false
      });
  
      builder.addCase(addEmployee.rejected, (state) => {
        state.loading = false;
      });

      builder.addCase(updateEmployee.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(updateEmployee.fulfilled, (state) => {
        state.loading = false
      });
  
      builder.addCase(updateEmployee.rejected, (state) => {
        state.loading = false;
      });

      
      builder.addCase(deleteEmployee.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(deleteEmployee.fulfilled, (state) => {
        state.loading = false
      });
  
      builder.addCase(deleteEmployee.rejected, (state) => {
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = employeeSlice.actions;

export default employeeSlice.reducer;
