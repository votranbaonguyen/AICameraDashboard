import { host } from "./host";

export const getAllAlertSettingApi = () => (
    `${host}/api/alertsetting/all`
)

export const addAlertSettingApi = () => (
    `${host}/api/alertsetting`
)

export const updateAlertSettingApi = () => (
    `${host}/api/alertsetting`
)

// export const deleteCameraApi = (cameraId) => (
//     `${host}/api/camera?id=${cameraId}`
// )