import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/authentication/authenticationSlice';
import { useForm } from 'antd/es/form/Form';


export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [form] = useForm()
    const {loading,loginFail} = useSelector(store => store.authentication)

    const onFinish = async (values) => {
        const res = await dispatch(userLogin(values))
        if(res.payload){
            navigate("/")
        }else{
            form.resetFields()
        }
        
    };
    const onFinishFailed = (errorInfo) => {
        
    };

    return (
        <div className="login_container">
            <div className="login_maincontent">
                <div className='login_header'>
                    <h1>LOGO</h1>
                    <p>Camera Dashboard</p>
                    <h2>Login</h2>
                    <p className='sub-text'>Enter your email and password below</p>
                    {loginFail && <p className='sub-text' style={{color:"red", marginTop:20 }}>Your email or password is wrong</p>}
                    
                </div>
                <div className="login_form">
                    <Form
                        layout='vertical'
                        name="basic"
                        form={form}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                    type: 'email'
                                },

                            ]}
                        >
                            <Input style={{paddingBlock:"8px"}}/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            style={{marginTop:"35px"}}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password style={{paddingBlock:"8px"}}/>
                        </Form.Item>

                        

                        <Form.Item
                        wrapperCol={{
                          
                          }}>
                            <Button loading={loading} type="primary" htmlType="submit" style={{width:"100%",paddingBlock:"22px",display:'flex',alignItems:'center',justifyContent:'center',marginTop:'20px'}}>
                                Log In
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
