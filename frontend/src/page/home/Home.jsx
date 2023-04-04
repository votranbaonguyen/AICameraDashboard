import { Col, Row } from 'antd'
import React from 'react'

export const Home = () => {
  return (
    <div className='home_container'>
      <div className='home_info'>
        <div className='info_card'>
          <h3>Tổng số Camera</h3>
          <span>60</span>
        </div>
        <div className='info_card'>
          <h3>Tổng số Profile</h3>
          <span>64</span>
        </div>
      </div>
      <div className="home_camera">
        <Row gutter={[16, 16]}>
          <Col span={12} >
            <div style={{width:"100%",height:300,backgroundColor:"black",display:'flex'}}>
            
            </div>
          </Col>
          <Col span={12} >
            <div style={{width:"100%",height:300,backgroundColor:"black",display:'flex'}}>
            
            </div>
          </Col>
          <Col span={12} >
            <div style={{width:"100%",height:300,backgroundColor:"black",display:'flex'}}>
            
            </div>
          </Col>
          <Col span={12} >
            <div style={{width:"100%",height:300,backgroundColor:"black",display:'flex'}}>
            
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
