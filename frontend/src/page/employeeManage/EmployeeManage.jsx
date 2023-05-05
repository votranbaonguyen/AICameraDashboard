import React, { useEffect, useState } from 'react'
import { EmployeeTable } from '../../components/EmployeeManagment/EmployeeTable'
import { useDispatch } from 'react-redux'
import { getAllEmployee } from '../../redux/employee/employeeSlice'
import { Button } from 'antd'
import { AddEmployeeDrawer } from '../../components/EmployeeManagment/AddEmployeeDrawer'

export const EmployeeManage = () => {
  const [open, setOpen] = useState(false);
  const [drawerData,setDrawerData] = useState(null);
  const showDrawer = () => {
    setOpen(true);
  };

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllEmployee())
  },[])

  return (
    <div>
      <AddEmployeeDrawer setDrawerData={setDrawerData} drawerData={drawerData} open={open} setOpen={setOpen}/>
      <div style={{display:"flex", justifyContent:"flex-end", marginBottom:"20px"}}><Button onClick={showDrawer} type="primary">Add Employee</Button></div>
      <EmployeeTable showDrawer={showDrawer} setDrawerData={setDrawerData}/>
    </div>
  )
}
