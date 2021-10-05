import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuitemOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'
export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className="logo">
          <Link to="/">MrCipHeR</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/Home">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchange">Exchange</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
        </Menu>
    </div>
  )
}