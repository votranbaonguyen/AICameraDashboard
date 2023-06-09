import React, { useEffect } from 'react'
import { Layout } from 'antd';
const { Header} = Layout;
import {
    ArrowLeftOutlined
  } from '@ant-design/icons';
import InfoForm from './InfoForm';
import { useDispatch } from 'react-redux';
import { getAllArea } from '../../redux/area/areaSlice';

const CameraInfo = ({setCameraInfo,cameraInfo,setScreenStatus}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllArea())
  },[cameraInfo])
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
              setCameraInfo(null)
              }} style={{fontSize:"18px", cursor:"pointer"}}>
                <ArrowLeftOutlined style={{fontSize:"18px", marginRight:"10px"}}/>
                Go Back
            </span>
           
            <h1>{cameraInfo !== null ? "Edit Camera" : "Add New Camera"}</h1>
          </Header>
          <div style={{width: "45%", marginLeft:"auto",marginRight:"auto",marginTop:"20px"}}>
            <InfoForm setScreenStatus={setScreenStatus} cameraInfo={cameraInfo}/>
          </div>
    </div>
  )
}

export default CameraInfo