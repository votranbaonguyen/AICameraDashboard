import { configureStore } from '@reduxjs/toolkit'
import authenticationSlice from './authentication/authenticationSlice'
import cameraSlice from './camera/cameraSlice'
import employeeSlice from './employee/employeeSlice'


export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    camera: cameraSlice,
    employeeSlice
  },
})