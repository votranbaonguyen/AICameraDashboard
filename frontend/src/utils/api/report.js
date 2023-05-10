import { host } from "./host";

export const getYearReportApi = (year) => (
    `${host}/api/report?year=${year}`
)

export const getMonthReportApi = (month,year) => (
    `${host}/api/report/filter?month=${month}&year=${year}`
)
