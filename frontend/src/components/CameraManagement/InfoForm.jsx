import { Col, Form, Input, Row, Select, Tag } from 'antd'
import React from 'react'

const InfoForm = () => {
    return (
        <Form layout="vertical" >
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="camName"
                        label="Camera Name"
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
                            <Option value="xiao">Xiaoxiao Fu</Option>
                            <Option value="mao">Maomao Zhou</Option>
                        </Select>
                    </Form.Item>
                </Col>

            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="connectionState"
                        label="Connection"
                        rules={[
                            {
                                required: true,
                                message: 'Please select an owner',
                            },
                        ]}
                    >
                        <Select style={{display:"flex", alignItems:"center"}} placeholder="Please select an owner">
                            <Option value={true}>
                                Connected
                            </Option>
                            <Option value={false}>
                                Disconnected
                            </Option>
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

        </Form>
    )
}

export default InfoForm