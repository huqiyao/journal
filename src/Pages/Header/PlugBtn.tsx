import React from 'react';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
const PlugBtn: React.FC<{}> = ({}) => {
  const menu = <Menu>
    <Menu.Item>a</Menu.Item>
    <Menu.Item>b</Menu.Item>
    <Menu.Item>c</Menu.Item>
    <Menu.Item>d</Menu.Item>
  </Menu>;
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <AppstoreAddOutlined
      style={{ marginRight: '30px', cursor: 'pointer', fontSize: '16px' }}
        className="operate-icon"
    ></AppstoreAddOutlined>
    </Dropdown>
    
  );
};

export default PlugBtn;
