import { Button, Col, Form, Input, Row, Select, Space, Tag } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCamera, getAllCamera, updateCamera } from '../../redux/camera/cameraSlice'

const InfoForm = ({ cameraInfo, setScreenStatus }) => {
    const { listArea, loading } = useSelector(store => store.area)
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    const RenderListCamera = () => (
        listArea.map((area) => {
            if (area.camera === null) {
                return <Option key={area.areaId} value={area.areaId}>{area.areaName}</Option>
            }
        })
    )

    const handleSubmit = async (value) => {



        if (cameraInfo !== null) {
            const data = value

            if (data.area === cameraInfo?.area?.areaName)
                data.area = {
                    areaId: cameraInfo?.area?.areaId
                }
            else data.area = {
                areaId: value.area
            }
            data["resource"] = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/MVPTGNGiI-4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
            data["camId"] = cameraInfo.camId
       
            await dispatch(updateCamera(data))
        } else {
            const data = value
            data["area"] = {
                areaId: value.area
            }
            data["resource"] = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/MVPTGNGiI-4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
            await dispatch(addCamera(data))
        }
        dispatch(getAllCamera())
        setScreenStatus("table")
    }

    useEffect(() => {
        if (cameraInfo !== null) {
            form.setFieldsValue(cameraInfo)
            form.setFieldValue("area", cameraInfo?.area?.areaName)
        }
    }, [cameraInfo])

    return (
        <Form form={form} onFinish={handleSubmit} layout="vertical" >
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
                            {RenderListCamera()}
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
                        <Select style={{ display: "flex", alignItems: "center" }} placeholder="Please select an owner">
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
            <Space style={{ width: "100%", justifyContent: "flex-end" }}>

                <Button loading={loading} htmlType='submit' type="primary">
                    Save
                </Button>
            </Space>
        </Form>
    )
}

export default InfoForm