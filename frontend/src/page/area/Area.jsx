import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllArea } from '../../redux/area/areaSlice'
import AreaTable from '../../components/Area/AreaTable'
import { Button } from 'antd'
import AreaDrawer from '../../components/Area/AreaDrawer'
import { getAllCamera } from '../../redux/camera/cameraSlice'


export const Area = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [areaData,setAreaData] = useState(null)
  const showDrawer = () => {
    setOpen(true);
  };
  useEffect(() => {
    dispatch(getAllArea())

  },[])

  const showDrawerWithData = (data) => {
    setAreaData(data)
    setOpen(true);
  }

  return (
    <div>
      <AreaDrawer setAreaData={setAreaData} areaData={areaData} open={open} setOpen={setOpen}/>
      <div style={{display:"flex", justifyContent:"flex-end", marginBottom:"20px"}}><Button onClick={showDrawer} type="primary">Add Area</Button></div>
      <AreaTable showDrawerWithData={showDrawerWithData}/>
    </div>
  )
}
