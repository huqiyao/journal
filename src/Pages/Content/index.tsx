import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import store from '../../Utils/store';
import './index.css';
import { Button, Modal, Radio, Space, message } from 'antd';
import { ShareAltOutlined, CopyOutlined } from '@ant-design/icons';
import { Slate, Editable } from 'slate-react';
const fileSaver = require('file-saver');

const Section = styled('section')`
  /*padding: 10px 7px;*/
  flex: 1;
`;

interface IContentProps {
  journalValue: string;
  [key: string]: any;
}

const config = {
  content: (
    <div style={{ display: 'inline-block', textAlign: 'left' }}>
      <p>
        <a>http://localhost:3000/journal/12/ax7i/?level=1</a>
      </p>
      <p>17860</p>
    </div>
  ),
  duration: 1,
  icon: (
    <CopyOutlined
      style={{ position: 'relative', top: '-35px' }}
      onClick={() => {
        message.success('copied');
      }}
    ></CopyOutlined>
  ),
};

const Content: React.FC<IContentProps> = ({ journalValue: tempValue }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [codeModalVisible, setCodeModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(store.getState()?.open);
  const [canShare, setCanShare] = useState(store.getState()?.canShare);
  const [journalValue, setJournalValue] = useState(tempValue);
  const [powerLevel, setPowerLevel] = useState(1);
  const textareaEl = useRef<HTMLTextAreaElement>(null);
  store.subscribe(() => {
    setIsOpen(store.getState()?.open);
    setCanShare(store.getState()?.canShare);
  });
  const exportFile = () => {
    const content = journalValue; // let content = JSON.stringify(data);这样会导致内容有双引号
    let blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    fileSaver.saveAs(blob, 'untitled.txt');
  };
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
              onClick={exportFile}
            >
              导出
            </Button>
          </div>
          {canShare && (
            <ShareAltOutlined
              className="share-btn"
              onClick={() => {
                setIsModalVisible(!isModalVisible);
              }}
            />
          )}
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
      <Modal
        title="生成分享链接"
        visible={isModalVisible}
        okText="确认"
        cancelText="取消"
        onCancel={() => {
          setIsModalVisible(false);
        }}
        onOk={() => {
          message.info(config);
          setIsModalVisible(false);
        }}
        style={{ top: '30px' }}
      >
        <Radio.Group
          value={powerLevel}
          onChange={(e) => {
            setPowerLevel(e.target.value);
          }}
        >
          {/* <Space direction="vertical"> */}
          <Radio value={1}>仅允许评论</Radio>
          <Radio value={2}>可评论与批阅</Radio>
          {/* </Space> */}
        </Radio.Group>
      </Modal>
    </Section>
  );
};

export default Content;
