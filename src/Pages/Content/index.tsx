import React, { useState, useEffect, useRef } from 'react';
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

interface IContentProps {
  journalValue: string;
  [key: string]: any;
}
const Content: React.FC<IContentProps> = ({ journalValue: tempValue }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(store.getState()?.open);
  const [canShare, setCanShare] = useState(store.getState()?.canShare);
  console.log('11111111',canShare)
  const [journalValue, setJournalValue] = useState(tempValue);
  const textareaEl = useRef<HTMLTextAreaElement>(null);
  store.subscribe(() => {
    setIsOpen(store.getState()?.open);
    setCanShare(store.getState()?.canShare);
    console.log('222222222',canShare)
  });

  return (
    <Section style={{ position: 'relative', height: '100%', width: '100%' }}>
      {/* <div className="content-container" style={{ height: '100%', width: 'auto', background: '#f1f3f4' }}> */}

      {isOpen && (
        <div className="editor">
          <textarea
            ref={textareaEl}
            value={journalValue}
            onChange={(e) => {
              setJournalValue(e.target.value);
              console.log(e.target.value);
            }}
          ></textarea>
          <div className="operate-btn">
            <Button
              size="small"
              onClick={() => {
                setJournalValue('');
                textareaEl.current?.focus();
              }}
            >
              清空
            </Button>
            <Button
              size="small"
              style={{
                marginLeft: '10px',
              }}
            >
              保存
            </Button>
          </div>
          {canShare && <ShareAltOutlined className="share-btn" />}
        </div>
      )}
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
