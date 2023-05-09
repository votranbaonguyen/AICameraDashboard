import { Button, Space, Table } from 'antd';
import { useState } from 'react';
import { MyCameraTable } from '../../components/CameraManagement/MyCameraTable';
import { useSelector } from 'react-redux';
import CameraInfo from '../../components/CameraManagement/CameraInfo';

export const CameraManage = () => {
  const { listCamera } = useSelector(store => store.camera)
  const [screenStatus, setScreenStatus] = useState("table")
  const [cameraInfo,setCameraInfo] = useState(null)

  const ChangeToInfoScreen = (data) => {
    setScreenStatus("info")
    setCameraInfo(data)
  }

  return (
    <div>
      {screenStatus === "table" ?
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}><Button onClick={() => {ChangeToInfoScreen(null)}} type="primary">Add New Camera</Button></div>
          <MyCameraTable ChangeToInfoScreen={ChangeToInfoScreen}/>
        </div>
        :
        <CameraInfo cameraInfo={cameraInfo}/>
      }

    </div>
  )
}
