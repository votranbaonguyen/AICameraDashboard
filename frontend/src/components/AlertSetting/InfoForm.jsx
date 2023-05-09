
import { Button, Col, Form, Input, Row, Select, Space, Tag } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TimePicker } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';


const a = new Date()
const InfoForm = () => {
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState(null);

    const { listEmployee } = useSelector(store => store.employeeSlice)
    const { listArea } = useSelector(store => store.area)
    const onChangeStart = (time) => {
        let a = time.$d.toString()
        setStartTime(a.split(" ")[4])

    };

    const onChangeEnd = (time) => {
        let a = time.$d.toString()
        setEndTime(a.split(" ")[4])
    };

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
    return (
        <Form layout="vertical" >
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
                        <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} onChange={onChangeStart} value={startTime} />
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
                        <TimePicker onChange={onChangeEnd} value={endTime} />
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
            <Space style={{ width: "100%", justifyContent: "flex-end" }}>

                <Button htmlType='submit' type="primary">
                    Save
                </Button>
            </Space>
        </Form>
    )
}

export default InfoForm