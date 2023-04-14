import { configureStore } from '@reduxjs/toolkit'
import authenticationSlice from './authentication/authenticationSlice'
import cameraSlice from './camera/cameraSlice'



export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    camera: cameraSlice
  },
})