import React, { useState } from 'react'
import YearReport from '../../components/Report/YearReport'
import { Radio } from 'antd'
import MonthReport from '../../components/Report/MonthReport'

export const Static = () => {
  const [reportScreen, setReportScreen] = useState("yearReport")
  const onChange = (e) => {
    setReportScreen(e.target.value)
  };
  return (
    <div>
      <div style={{marginBottom:20}}>
      <Radio.Group onChange={onChange} defaultValue={"yearReport"}>
        <Radio.Button value="yearReport">Year Report</Radio.Button>
        <Radio.Button value="monthReport">Month Report</Radio.Button>
      </Radio.Group>
      </div>
      {reportScreen === "yearReport" ? <YearReport /> : <MonthReport/>}
      
    </div>
  )
}
