import { UploadOutlined, SettingOutlined, VideoCameraOutlined, PieChartOutlined, AlertOutlined, HomeOutlined, BarChartOutlined, PhoneOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { userLogout } from '../redux/authentication/authenticationSlice';
const { Header, Content, Footer, Sider } = Layout;

const navItemList = [
  {
    key: 0,
    icon: <PieChartOutlined />,
    label: "Trang chủ",
    path: "/"
  },
  {
    key: 1,
    icon: <VideoCameraOutlined />,
    label: "Quản lý camera",
    path: "/cameramanage"
  },
  {
    key: 2,
    icon: <AlertOutlined />,
    label: "Cảnh báo",
    path: "/alert"
  },
  {
    key: 3,
    icon: <SettingOutlined />,
    label: "Cài đặt Cảnh báo",
    path: "/setting"
  },
  {
    key: 4,
    icon: <HomeOutlined />,
    label: "Khu vực",
    path: "/area"
  },
  
  {
    key: 5,
    icon: <UserAddOutlined />,
    label: "Nhân Viên",
    path: "/employees"
  },
  {
    key: 6,
    icon: <BarChartOutlined />,
    label: "Thống kê",
    path: "/static"
  },
  // {
  //   key: 7,
  //   icon: <PhoneOutlined />,
  //   label: "Liên hệ",
  //   path: "/contact"
  // },

  
]

export const HomeTemplate = () => {
  const navigate = useNavigate()
  const disptach = useDispatch()
  const [currentTab, setCurrentTab] = useState("Trang chủ")
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    disptach(userLogout())
  }

  const { isLogin } = useSelector(store => store.authentication)


  // useEffect(() => {
  //   console.log(userInfo)

  // },[userInfo])
  if (!isLogin) {
    return <Navigate to="/login" />
  } else
    return (
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}

        >
          <div className="logo">
            <h1>LOGO</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['0']}
            items={navItemList}
            onSelect={(value) => {
              const index = value.key
              setCurrentTab(navItemList[index].label)
              navigate(navItemList[index].path)
            }}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              paddingInline: 20,
              background: colorBgContainer,
            }}
          >
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingInline:20}}>
            <h1>{currentTab}</h1>
            <Button onClick={handleLogout} danger type='primary'>Logout</Button>
            </div>
            
          </Header>
          <Content
            style={{
              margin: '24px 16px 0',
              paddingInline: 20
            }}
          >
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
}
a = ""