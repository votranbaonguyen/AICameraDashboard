import { Button, Space, Table } from 'antd';
import { useState } from 'react';
import MyCameraTable from '../../components/CameraManagement/MyCameraTable';
import { useSelector } from 'react-redux';

export const CameraManage = () => {
  const {listCamera} = useSelector(store => store.camera)
  console.log(listCamera)

  return (
    <MyCameraTable />
  )
}
