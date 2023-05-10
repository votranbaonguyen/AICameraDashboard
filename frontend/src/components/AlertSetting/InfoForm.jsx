
import { Button, Col, Form, Input, Row, Select, Space, Tag } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TimePicker } from 'antd';
import { useState } from 'react';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { addAlertSetting, getAllAlertSetting, updateAlertSetting } from '../../redux/alertSetting/alertSettingSlice';
const InfoForm = ({alertSettingInfo,ChangeToTableScreen}) => {
    const dispatch = useDispatch()

    const [form] = useForm()
    const { listEmployee } = useSelector(store => store.employeeSlice)
    const { listArea } = useSelector(store => store.area)


    const renderEmployeeList = () => {
        return listEmployee.map((employee) => {
            return <Option key={employee.employeeId} value={employee.employeeId}>
                {employee.name}
            </Option>
        })
    }

    const renderAreaList = () => {
        return listArea.map((area) => {
            return <Option key={area.areaId} value={area.areaId}>
                {area.areaName}
            </Option>
        })
    }

    const handleSubmit = async (value) => {
        const startTime = value.startTime.$d.toString().split(" ")[4]
        const endTime = value.endTime.$d.toString().split(" ")[4]
        const data = {
            alertName: value.alertName,
            startTime,
            endTime,
            secLevel: value.securityLevel,
            employee: {
                employeeId: value.employee
            },
            imgLink: "https://firebasestorage.googleapis.com/v0/b/mobileappmusicplay.appspot.com/o/HDT%2FAnh3x4.jpg?alt=media&token=89f740e7-404b-4f29-b937-d7e2dea009c2",
            area: {
                areaId: value.area
            }
        }
        if(alertSettingInfo !== null){
            data["alertSTId"]=alertSettingInfo.alertSTId
            await dispatch(updateAlertSetting(data))
        }
        else await dispatch(addAlertSetting(data))
        ChangeToTableScreen()
        dispatch(getAllAlertSetting())
    }

    useEffect(() => {
        if(alertSettingInfo !== null){
            // form.setFieldsValue(alertSettingInfo)
            form.setFieldsValue({
                alertName: alertSettingInfo.alertName,
                startTime: dayjs(alertSettingInfo.startTime, 'HH:mm:ss'),
                endTime: dayjs(alertSettingInfo.endTime, 'HH:mm:ss'),
                employee: alertSettingInfo.employee.employeeId,
                area: alertSettingInfo.area.areaId,
                securityLevel: alertSettingInfo.secLevel
            })
        }
        console.log(alertSettingInfo)
        // form.setFieldValue("startTime", dayjs('12:08:23', 'HH:mm:ss'))
    },[])
    return (
        <Form form={form} onFinish={handleSubmit} layout="vertical" >
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="alertName"
                        label="Alert Setting Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please do not let this field be blank',
                            },
                        ]}
                    >
                        <Input placeholder="Please enter user name" />
                    </Form.Item>
                </Col>

            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="startTime"
                        label="Start Time"
                        rules={[
                            {
                                required: true,
                                message: 'Please select an owner',
                            },
                        ]}
                    >
                        <TimePicker />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="endTime"
                        label="End Time"
                        rules={[
                            {
                                required: true,
                                message: 'Please select an owner',
                            },
                        ]}
                    >
                        <TimePicker  />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="employee"
                        label="Employee"
                        rules={[
                            {
                                required: true,
                                message: 'Please select an owner',
                            },
                        ]}
                    >
                        <Select style={{ display: "flex", alignItems: "center" }} placeholder="Please select an owner">
                            {renderEmployeeList()}
                        </Select>
                    </Form.Item>
                </Col>

            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="area"
                        label="Area"
                        rules={[
                            {
                                required: true,
                                message: 'Please select an owner',
                            },
                        ]}
                    >
                        <Select placeholder="Please select an owner">
                           {renderAreaList()}
                        </Select>
                    </Form.Item>
                </Col>

            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="securityLevel"
                        label="Security Level"
                        rules={[
                            {
                                required: true,
                                message: 'Please select an owner',
                            },
                        ]}
                    >
                        <Select placeholder="Please select an owner">
                            <Option value="low">Low</Option>
                            <Option value="medium">Medium</Option>
                            <Option value="high">High</Option>
                            <Option value="emergency">Emergency</Option>
                        </Select>
                    </Form.Item>
                </Col>

            </Row>
            <Space style={{ width: "100%", justifyContent: "flex-end" }}>

                <Button htmlType='submit' type="primary">
                    Save
                </Button>
            </Space>
        </Form>
    )
}

export default InfoForm