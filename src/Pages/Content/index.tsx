import React, { useState } from 'react';
import styled from 'styled-components';
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
  return (
    <Section>
      {/* <div className="content-container" style={{ height: '100%', width: 'auto', background: '#f1f3f4' }}> */}
      <ul className="page">
        <li className="cover-page"></li>
        <li className="inside-page">
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
        <li className="inside-page">
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
        <li className="inside-page">
          <div></div>
          <div style={{ textAlign: 'right' }}>......|||||||||</div>
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
        <li className="inside-page">
          <div style={{ position: 'absolute', right: 0, width: '120px', border: 'none' }}>
            <Button
              size="small"
              style={{
                marginRight: '10px',
              }}
            >
              保存
            </Button>
            <Button size="small">清空</Button>
          </div>
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
          <div
            style={{
              position: 'absolute',
              right: 0,
              width: '120px',
              border: 'none',
              fontSize: '16px',
            }}
          >
            <ShareAltOutlined
              onClick={() => {
                setIsModalVisible(true);
              }}
            ></ShareAltOutlined>
          </div>
        </li>
        <li className="end-page"></li>
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
