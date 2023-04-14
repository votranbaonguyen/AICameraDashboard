import { UploadOutlined, UserOutlined, VideoCameraOutlined, PieChartOutlined, AlertOutlined, HomeOutlined, BarChartOutlined, PhoneOutlined, UserAddOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
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
    icon: <HomeOutlined />,
    label: "Khu vực",
    path: "/area"
  },
  {
    key: 4,
    icon: <BarChartOutlined />,
    label: "Thống kê",
    path: "/static"
  },
  {
    key: 5,
    icon: <PhoneOutlined />,
    label: "Liên hệ",
    path: "/contact"
  },
  {
    key: 6,
    icon: <PhoneOutlined />,
    label: "Cài đặt",
    path: "/setting"
  },
  {
    key: 7,
    icon: <UserAddOutlined />,
    label: "Đăng kí",
    path: "/employees"
  },
]

export const HomeTemplate = () => {
  const navigate = useNavigate()

  const [currentTab, setCurrentTab] = useState("Trang chủ")
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
            <h1>{currentTab}</h1>
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
