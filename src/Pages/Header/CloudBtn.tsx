import React from 'react';
import { CloudUploadOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Divider, Switch, Input } from 'antd';
const menu = (
  <Menu>
    <Divider plain style={{ borderColor: 'rgb(217, 217, 217)' }}>正在上传</Divider>
    <Menu.Item style={{textAlign:'center', fontSize:'12px',padding:'0px'}}>暂无信息</Menu.Item>
    <Divider plain style={{ borderColor: 'rgb(217, 217, 217)' }}>已上传</Divider>
    <Menu.Item>aa</Menu.Item>
    <Menu.Item>aa</Menu.Item>
  </Menu>
);
const CloudBtn: React.FC<{}> = ({}) => {
  return (
    <Dropdown overlay={menu} arrow overlayStyle={{width:'120px',zIndex:20000000000}}>
      <CloudUploadOutlined
        style={{ marginRight: '30px', cursor: 'pointer', fontSize: '16px' }}
        className="operate-icon"
      ></CloudUploadOutlined>
    </Dropdown>
  );
};

export default CloudBtn;
