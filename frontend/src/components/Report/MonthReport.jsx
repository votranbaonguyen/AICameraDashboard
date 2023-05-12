import React, { useState, useEffect } from 'react';

import { Column } from '@ant-design/plots';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthReport } from '../../redux/report/reportSlice';
import { partToDayList } from '../../utils/report/reportHelper';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
const monthFormat = 'YYYY/MM';

const MonthReport = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  const { monthReport } = useSelector(store => store.report)
  const onChange = (date, dateString) => {

    dispatch(getMonthReport({
      month: (date.$M + 1).toString(),
      year: date.$y.toString()
    }))
    console.log(date)
  };

  useEffect(() => {
    dispatch(getMonthReport({
      month: "4",
      year: "2020"
    }))
  }, [])

  useEffect(() => {
    setData(partToDayList(monthReport))

  }, [monthReport])


  const config = {
    data,
    xField: 'day',
    yField: 'numberAlert',
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    slider: {
      start: 0.1,
      end: 0.3,
    },
    meta: {
      day: {
        alias: 'Haha',
      },
      numberAlert: {
        alias: 'Number Of Alert',

      },
    }
  };

  return <div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
      <span style={{ fontSize: 25 }}>Month Report</span>
      <DatePicker defaultValue={dayjs('2020/04', monthFormat)} format={monthFormat} onChange={onChange} picker='month' />
    </div>

    <Column {...config} />
  </div>;
}

export default MonthReport