import React, { useEffect } from 'react'
import { Layout } from 'antd';
const { Header} = Layout;
import {
    ArrowLeftOutlined
  } from '@ant-design/icons';
import InfoShow from './InfoShow';


const AlertInfo = ({alertInfo,changeToTableScreen}) => {
    
   
    return (
      <div style={{height:"100%",overflow:"auto"}}>
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
              <span onClick={changeToTableScreen} style={{fontSize:"18px", cursor:"pointer"}}>
                  <ArrowLeftOutlined style={{fontSize:"18px", marginRight:"10px"}}/>
                  Go Back
              </span>
             
              <h1></h1>
            </Header>
            <InfoShow  alertInfo={alertInfo}/>
      </div>
    )
}

export default AlertInfo
