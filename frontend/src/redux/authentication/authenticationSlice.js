import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginApi } from '../../utils/api/authentication';
import axios from 'axios';

const initialState = {
  loading: false,
  userInfo: {},
  isLogin: false
}

export const userLogin = createAsyncThunk("authentication/login", async (obj) => {
    let res;
    
        // res = await fetch(loginApi(),{
        //     method: "POST",
        //     body: JSON.stringify(obj)
        // })
        // console.log(res)
        res = await axios({
            url: loginApi(),
            method: "POST",
            data: obj,
          })
        res = JSON.stringify(res)
        res = JSON.parse(res)
        sessionStorage.setItem("access_token", res.data.token)
        return res.data
  });

export const authenticationSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  
  },
  extraReducers:(builder) =>{
    builder.addCase(userLogin.pending, (state) => {
        state.loading = true
    })

    builder.addCase(userLogin.fulfilled, (state,action) => {
        state.userInfo = action.payload
        state.isLogin = true
     
    })

    builder.addCase(userLogin.rejected, (state) => {
      state.loading = false
    })
  }
})

// Action creators are generated for each case reducer function
export const {  } = authenticationSlice.actions

export default authenticationSlice.reducer