
import React, { useState, useEffect } from 'react';

import { Column } from '@ant-design/plots';
import { useDispatch, useSelector } from 'react-redux';
import { getYearReport } from '../../redux/report/reportSlice';
import { partToMonthList } from '../../utils/report/reportHelper';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const YearReport = () => {
    const dispatch = useDispatch()
    const {yearReport} = useSelector(store => store.report)
    const [yearReportData,setYearReportData] = useState([])

    const onChange = (date, dateString) => {
        dispatch(getYearReport(date.$y.toString()))
      };
    useEffect(() => {
        dispatch(getYearReport("2020"))
    },[])
    
    useEffect(() => {
        setYearReportData(partToMonthList(yearReport))
    
    },[yearReport])
    
      const config = {
        data: yearReportData ,
        xField: 'name',
        yField: 'numberAlert',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle',
          // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: false,
            autoRotate: false,
          },
        },
        meta: {
            name: {
            alias: 'Haha',
          },
          numberAlert: {
            alias: 'Number Of Alert',
            
          },
        },
      };
      return <div>
        <div style={{display:"flex",justifyContent:"space-between", alignItems:"center", marginBottom:30}}>
            <span style={{fontSize:25}}>Year Report</span>
        <DatePicker defaultValue={dayjs('2020')}  onChange={onChange} picker='year'/>
        </div>
        
         <Column {...config} />
      </div>;
}

export default YearReport