import React, { useState } from 'react';
import { AppstoreAddOutlined, ClockCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Divider, Switch, Input } from 'antd';
const { Search } = Input;
const PlugBtn: React.FC<{}> = ({}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const btnMenu = (
    <Menu>
      <Menu.Item>uninstall</Menu.Item>
      <Menu.Item>copy information</Menu.Item>
    </Menu>
  );
  const menu = (
    <Menu>
      <Divider plain style={{ borderColor: 'rgb(217, 217, 217)' }}>
        已安装
      </Divider>
      <Menu.Item>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <ClockCircleOutlined style={{ color: '#1890ff' }} />
          <span>Date Block</span>
          <Switch size="small"></Switch>
          <Dropdown overlay={btnMenu} arrow>
            <SettingOutlined style={{ fontSize: '14px' }}></SettingOutlined>
          </Dropdown>
        </div>
      </Menu.Item>
      <Divider plain style={{ borderColor: 'rgb(217, 217, 217)' }}>
        未安装
      </Divider>
      <Menu.Item>
        <Search placeholder="搜索插件" style={{ width: 150 }} className="plug-search" />
      </Menu.Item>
      {/* <Menu.Item>c</Menu.Item>
      <Menu.Item>d</Menu.Item> */}
    </Menu>
  );
  return (
    <Dropdown
      overlay={menu}
      trigger={['click']}
      overlayStyle={{ width: '180px' }}
      placement="bottomCenter"
      visible={dropdownVisible}
      arrow
    >
      <AppstoreAddOutlined
        style={{ marginRight: '30px', cursor: 'pointer', fontSize: '16px' }}
        className="operate-icon"
        onClick={() => {
          setDropdownVisible(!dropdownVisible);
        }}
      ></AppstoreAddOutlined>
    </Dropdown>
  );
};

export default PlugBtn;
