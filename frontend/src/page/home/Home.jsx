import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getAllCamera } from '../../redux/camera/cameraSlice'
import { parseIframe } from '../../utils/parseIframe/parseIframe'

export const Home = () => {
  const dispatch = useDispatch()
  const {listCamera} = useSelector(store => store.camera)

  useEffect(() => {
    dispatch(getAllCamera())
  },[])


  const renderCamera = () => {
    return listCamera?.map((camera) => {
      return <Col span={12}>
        {parseIframe(camera.resource)}
      </Col>
    })
  }

    return (
      <div className='home_container'>
        <div className='home_info'>
          <div className='info_card'>
            <h3>Tổng số Camera</h3>
            <span>{listCamera.length}</span>
          </div>
          <div className='info_card'>
            <h3>Tổng số Profile</h3>
            <span>64</span>
          </div>
        </div>
        <div className="home_camera">
          <Row gutter={[16, 16]}>
            {renderCamera()}
          </Row>
        </div>
      </div>
    )
}
