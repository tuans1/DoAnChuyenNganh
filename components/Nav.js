import React, { useState } from 'react'
import { Layout, Input, Menu, Breadcrumb, Badge, Avatar, Dropdown } from 'antd';
import { BellFilled, BellOutlined } from '@ant-design/icons'
const { Search } = Input;
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Link from 'next/link';
const { Header, Sider, Content } = Layout;
export default function Nav({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    const [showNotify, setShowNotify] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    }

    const onSearch = value => console.log(value);
    return (
        <>
            <Layout>
                <Sider style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }} trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" >
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link href="/">
                                Trang Chủ
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link href="/category">
                                Dự Án
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ margin: '0px 0px 0px 200px' }}>
                    <Header className="site-layout-background fixed" style={{ padding: 0 }}>
                        {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: toggle,
                            })} */}
                        <div className='flex justify-end items-center pl-4 pr-4 gap-8'>
                            <span>.</span>
                            <div className="nav__notify">
                                <Badge count={51} size='small' className='cursor-pointer'>
                                    <BellFilled style={{ fontSize: 20, color: 'white' }} />
                                </Badge>
                                {/* <div className="notify__dropdown absolute bg-red-500 w-64 right-16 rounded">
                                    <span className='triangle'></span>
                                    <div className="notify__header flex justify-center items-center h-10" style={{ borderBottom: '1px solid black' }}>
                                        <span>Notifications</span>
                                    </div>
                                    <div className='notify__body'>
                                        <p>test</p>
                                    </div>
                                </div> */}
                            </div>
                            <Avatar style={{ background: 'white' }} className='cursor-pointer' shape='square' src="https://joeschmoe.io/api/v1/random" />
                        </div>
                    </Header>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 10px' }}>
                        <Breadcrumb >
                            <Breadcrumb.Item><a href="">Loại Thiết Bị</a></Breadcrumb.Item>
                            <Breadcrumb.Item>An Application</Breadcrumb.Item>
                        </Breadcrumb>
                        {/* <Search placeholder="input search text" style={{ width: 304 }} onSearch={onSearch} enterButton /> */}
                    </div>
                    <Content
                        className="site-layout-background"
                        style={{
                            minHeight: 609, margin: '0px 10px 0px 10px'
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
