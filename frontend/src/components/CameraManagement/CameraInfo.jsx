import React from 'react'
import { Layout } from 'antd';
const { Header} = Layout;
import {
    ArrowLeftOutlined
  } from '@ant-design/icons';
import InfoForm from './InfoForm';

const CameraInfo = ({cameraInfo}) => {

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
            <span style={{fontSize:"18px", cursor:"pointer"}}>
                <ArrowLeftOutlined style={{fontSize:"18px", marginRight:"10px"}}/>
                Go Back
            </span>
           
            <h1>{cameraInfo !== null ? "Edit Camera" : "Add New Camera"}</h1>
          </Header>
          <div style={{width: "45%", marginLeft:"auto",marginRight:"auto",marginTop:"20px"}}>
            <InfoForm/>
          </div>
    </div>
  )
}

export default CameraInfo