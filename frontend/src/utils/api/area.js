import { host } from "./host";

export const getAllAreaApi = () => (
    `${host}/api/area/all`
)

export const addAreaApi = () => (
    `${host}/api/area`
)

export const updateAreaApi = () => (
    `${host}/api/area`
)

export const deleteAreaApi = (areaId) => (
    `${host}/api/area?id=${areaId}`
)