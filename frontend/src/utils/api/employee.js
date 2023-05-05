import { host } from "./host";

export const getAllEmployeeApi = () => (
    `${host}/api/employee/all`
)

export const addEmployeeApi = () => (
    `${host}/api/employee`
)

export const updateEmployeeApi = () => (
    `${host}/api/employee`
)

export const deleteEmployeeApi = (employeeId) => (
    `${host}/api/employee?id=${employeeId}`
)