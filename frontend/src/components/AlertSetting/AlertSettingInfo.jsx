import React, { useEffect } from 'react'
import { Layout } from 'antd';
const { Header} = Layout;
import {
    ArrowLeftOutlined
  } from '@ant-design/icons';
import InfoForm from './InfoForm';
import { useDispatch } from 'react-redux';
import { getAllEmployee } from './../../redux/employee/employeeSlice';
import { getAllArea } from '../../redux/area/areaSlice';



const AlertSettingInfo = ({ChangeToTableScreen,alertSettingInfo,setAlertSettingInfo,setScreenStatus}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllEmployee())
        dispatch(getAllArea())
    },[])
  return (
    <div>
        <Header
            style={{
              paddingInline: 20,
              height:50,
              background: "transparent",
              display:"flex",
              alignItems:"center",
              justifyContent:"space-between"
            }}
          >
            <span onClick={() => {
              setScreenStatus("table")
              setAlertSettingInfo(null)
              }} style={{fontSize:"18px", cursor:"pointer"}}>
                <ArrowLeftOutlined style={{fontSize:"18px", marginRight:"10px"}}/>
                Go Back
            </span>
           
            <h1>{alertSettingInfo !== null ? "Edit Alert Setting" : "Add New Alert Setting"}</h1>
          </Header>
          <div style={{width: "45%", marginLeft:"auto",marginRight:"auto",marginTop:"20px"}}>
            <InfoForm alertSettingInfo={alertSettingInfo} ChangeToTableScreen={ChangeToTableScreen}/>
          </div>
    </div>
  )
}

export default AlertSettingInfo