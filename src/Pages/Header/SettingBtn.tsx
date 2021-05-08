import React, { useState } from 'react';
import { SettingOutlined, CheckOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Modal, Radio, Input } from 'antd';
import styled from 'styled-components';
import store from '../../Utils/store';

const { SubMenu } = Menu;
const ReplacementSpan = styled.span`
   {
    display: inline-block;
    height: 12px;
    width: 20px;
  }
`;
const SettingBtn: React.FC<{}> = ({}) => {
  const [canShare, setCanShare] = useState(store.getState()?.canShare);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLocked, setisLocked] = useState(0);
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          setCanShare(!canShare);
          store.setState({ canShare: !canShare }); // 这两句组合，相当于其他的subscribe了
        }}
      >
        {canShare ? <CheckOutlined /> : <ReplacementSpan></ReplacementSpan>}
        <span>分享</span>
      </Menu.Item>
      <Menu.Item>
        <CheckOutlined />
        <span>同步</span>
      </Menu.Item>
      <Menu.Item>
        {/* <CheckOutlined/> */}
        <ReplacementSpan></ReplacementSpan>
        <span>拼写检测</span>
      </Menu.Item>
      <SubMenu
        title={
          <>
            <ReplacementSpan></ReplacementSpan>
            <span>应用锁</span>
          </>
        }
      >
        <Menu.Item
          style={{ zIndex: 2000000000000 }}
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          设置应用锁
        </Menu.Item>
      </SubMenu>
      {/* <Menu.Item>
        <CheckOutlined />
        <span>应用锁</span>
      </Menu.Item> */}
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu} overlayStyle={{ zIndex: 20000000000 }}>
        <SettingOutlined
          style={{ marginRight: '30px', cursor: 'pointer', fontSize: '16px' }}
          className="operate-icon"
        ></SettingOutlined>
      </Dropdown>
      <Modal
        title="设置应用锁"
        visible={isModalVisible}
        onOk={() => {
          setIsModalVisible(false);
        }}
        okText="保存设置"
        cancelText="取消"
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <Radio.Group
          onChange={(e) => {
            setisLocked(e.target.value);
          }}
          value={isLocked}
        >
          <Radio value={0}>不设应用锁</Radio>
          <Radio value={1}>
            设置应用锁
            <>
              <Input.Password
                style={{ width: 100, marginLeft: 10 }}
                placeholder="请设置密码"
                disabled={!isLocked}
              />

              <Input.Password
                style={{ width: 100, marginLeft: 10 }}
                placeholder="请确认密码"
                disabled={!isLocked}
              />
            </>
          </Radio>
        </Radio.Group>
      </Modal>
    </>
  );
};

export default SettingBtn;
