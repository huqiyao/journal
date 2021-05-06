import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import store from '../../Utils/store';
import './index.css';
import { Button, Modal, Radio, Space } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import { Slate, Editable } from 'slate-react';
const Section = styled('section')`
  /*padding: 10px 7px;*/
  flex: 1;
`;

const Content: React.FC<{}> = ({}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(store.getState()?.open);
  store.subscribe(() => {
    setIsOpen(store.getState()?.open);
  })
  return (
    <Section>
      {/* <div className="content-container" style={{ height: '100%', width: 'auto', background: '#f1f3f4' }}> */}
      <ul className={'page' + `${store.getState()?.open ? ' open-page' : ''}`}>
        <li className={`cover-page${store.getState()?.open ? ' open-page-li' : ''}`}></li>
        <li className={`inside-page${store.getState()?.open ? ' open-page-li' : ''}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </li>
        <li className={`inside-page${store.getState()?.open ? ' open-page-li' : ''}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </li>
        <li className={`inside-page${store.getState()?.open ? ' open-page-li' : ''}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </li>
        <li className={`inside-page${store.getState()?.open ? ' open-page-li' : ''}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </li>
        <li className={`end-page${store.getState()?.open ? ' open-page-li' : ''}`}></li>
      </ul>
      {/* </div> */}
      {/* <Modal title="生成分享链接" visible={isModalVisible} okText="确认" cancelText="取消">
        <Radio.Group>
        <Space direction="vertical">
          <Radio value={1}>仅允许评论</Radio>
          <Radio value={2}>可评论与批阅</Radio>
        </Space>
      </Radio.Group>
      </Modal> */}
    </Section>
  );
};

export default Content;
