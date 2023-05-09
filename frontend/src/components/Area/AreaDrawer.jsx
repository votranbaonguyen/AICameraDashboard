import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArea, getAllArea, updateArea } from '../../redux/area/areaSlice';
const { Option } = Select;

const AreaDrawer = ({setAreaData,areaData, open, setOpen }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()

  const onClose = () => {
    setAreaData(null)
    setOpen(false);
  };

  const handleSubmit = async (value) => {
    
    const data = {
      areaName: value.areaName
    }
    if(areaData === null)
      await dispatch(addArea(data))
    else {
      data["areaId"] = areaData.areaId
      await dispatch(updateArea(data))
    }
    onClose()
    dispatch(getAllArea())
  }


  useEffect(() => {
    console.log(areaData)
    if(areaData){
      form.setFieldValue("areaName",areaData.areaName)
    }else{
      form.resetFields()
    }
  },[areaData])
 

  return (
    <>
      <Drawer
        title="Create a new account"
        width={400}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}

      >
        <Form form={form} onFinish={handleSubmit} layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="areaName"
                label="Area Name"
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
                name="cameraName"
                label="Camera Name"

               
              >
               <Input disabled  placeholder={ areaData?.camera ? areaData.camera.camName : "No Camera"} />
              </Form.Item>
            </Col>

          </Row>

          <Space style={{ width: "100%", justifyContent: "flex-end" }}>
            <Button onClick={onClose}>Cancel</Button>
            <Button htmlType='submit' type="primary">
              Submit
            </Button>
          </Space>
        </Form>
      </Drawer>
    </>
  );
}

export default AreaDrawer