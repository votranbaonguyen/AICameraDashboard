import React, { useEffect } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useState } from 'react';
import { UploadImage } from './UploadImage';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, getAllEmployee, updateEmployee } from '../../redux/employee/employeeSlice';


export const AddEmployeeDrawer = ({open, setOpen,drawerData,setDrawerData}) => {
  const [form] = Form.useForm();
    const dispatch = useDispatch()
    const {loading} = useSelector(store => store.employeeSlice)
  const onClose = () => {
    setOpen(false);
    setDrawerData(null)
  };


  const handleSubmit = async (value) => {
    const newValue = value
   
    if(drawerData){
      newValue.employeeId = drawerData.employeeId
      await dispatch(updateEmployee(newValue))
    }else{
      newValue.imgLink = "https://firebasestorage.googleapis.com/v0/b/mobileappmusicplay.appspot.com/o/HDT%2FAnh3x4.jpg?alt=media&token=89f740e7-404b-4f29-b937-d7e2dea009c2"
      await dispatch(addEmployee(newValue))  
    }
    onClose()
    dispatch(getAllEmployee())
  }

  useEffect(() => {
    if(drawerData)
      form.setFieldsValue(drawerData)
    else form.resetFields()
  },[drawerData])
  return (
    <Drawer
        title="Create a new account"
        width={400}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
       
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  {
                    required: true,
                    message: 'Please enter employee phone number',
                  },
                ]}
              >
                <Input placeholder="Please enter employee phone number" />
              </Form.Item>
            </Col>
            
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: 'Please enter employee address',
                  },
                ]}
              >
                <Input placeholder="Please enter employee address" />
              </Form.Item>
            </Col>
            
          </Row>
          <Row gutter={16}>
          <Col span={24}>
            <Form.Item
                name="imgLink"
                label="Image"
               
              >
                <UploadImage/>
              </Form.Item>
              </Col>
          </Row>
          <Space  style={{width:"100%", justifyContent:"flex-end"}}>
            <Button onClick={onClose}>Cancel</Button>
            <Button loading={loading} htmlType='submit' type="primary">
              Submit
            </Button>
          </Space>
        </Form>
      </Drawer>
  )
}
