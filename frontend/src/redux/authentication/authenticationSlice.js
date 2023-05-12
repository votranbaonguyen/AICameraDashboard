import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginApi } from '../../utils/api/authentication';
import axios from 'axios';

const initialState = {
  loading: false,
  userInfo: {},
  isLogin: false,
  loginFail: false
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

export const userLogout = createAsyncThunk("authentication/logout", async () => {
  sessionStorage.removeItem("access_token")
  return false
})

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
        state.loading = false
        state.isLogin = true
        state.loginFail = false
    })

    builder.addCase(userLogin.rejected, (state) => {
      state.loading = false
      state.loginFail = true
    })

    builder.addCase(userLogout.pending, (state) => {
      state.loading = true
  })

  builder.addCase(userLogout.fulfilled, (state,action) => {
      state.userInfo = {}
      state.isLogin = false
      state.loading = false
      state.loginFail = false
  })

  builder.addCase(userLogout.rejected, (state) => {
    state.loading = false
  })
  }
})

// Action creators are generated for each case reducer function
export const {  } = authenticationSlice.actions

export default authenticationSlice.reducer