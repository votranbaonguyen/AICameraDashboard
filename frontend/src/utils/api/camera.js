import { host } from "./host";

export const getAllCameraApi = () => (
    `${host}/api/camera/videos`
)

export const addCameraApi = () => (
    `${host}/api/camera`
)

export const updateCameraApi = () => (
    `${host}/api/camera`
)

export const deleteCameraApi = (cameraId) => (
    `${host}/api/camera?id=${cameraId}`
)