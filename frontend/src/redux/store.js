import { configureStore } from '@reduxjs/toolkit'
import authenticationSlice from './authentication/authenticationSlice'
import cameraSlice from './camera/cameraSlice'
import employeeSlice from './employee/employeeSlice'
import areaSlice from './area/areaSlice'
import alertSettingSlice from './alertSetting/alertSettingSlice'
import alertSlice from './alert/alertSlice'
import reportSlice from './report/reportSlice'


export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    camera: cameraSlice,
    employeeSlice,
    area: areaSlice,
    alertSetting: alertSettingSlice,
    alert:alertSlice,
    report: reportSlice
  },
})