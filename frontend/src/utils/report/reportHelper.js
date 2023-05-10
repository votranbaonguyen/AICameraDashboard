const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export const partToMonthList = (data) => {
    return data?.map((item,index) => {
        return {
            name: monthList[index],
            numberAlert: item
        }
    })
}

export const partToDayList = (data) => {
    return data?.map((item,index) => {
        return {
            day: index + 1,
            numberAlert: item
        }
    })
}