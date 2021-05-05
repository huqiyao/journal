import React, { useState } from 'react';
import styled from 'styled-components';
import Select from './Select';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import './index.css';
const { DirectoryTree } = Tree;
const treeData_year = [
  {
    title: '2020年',
    key: '0-0',
    children: [
      {
        title: '3月',
        key: '0-0-0',
        children: [{ title: '2020/3/10', key: '0-0-0-0', isLeaf: true }],
      },
      {
        title: '5月',
        key: '0-0-1',
        children: [
          { title: '2020/5/1', key: '0-0-1-0', isLeaf: true },
          { title: '2020/5/12', key: '0-0-1-1', isLeaf: true },
        ],
      },
    ],
  },
  {
    title: '2021年',
    key: '0-1',
    children: [
      {
        title: '3月',
        key: '0-1-0',
        children: [{ title: '2021/3/10', key: '0-1-0-0', isLeaf: true }],
      },
      {
        title: '5月',
        key: '0-1-1',
        children: [{ title: '2021/5/1', key: '0-1-1-1', isLeaf: true }],
      },
    ],
  },
];
const treeData_month = [
  {
    title: '2020年',
    key: '0-0',
    children: [
      {
        title: '3月',
        key: '0-0-0',
        children: [{ title: '2020/3/10', key: '0-0-0-0', isLeaf: true }],
      },
      {
        title: '5月',
        key: '0-0-1',
        children: [
          { title: '2020/5/1', key: '0-0-1-0', isLeaf: true },
          { title: '2020/5/12', key: '0-0-1-1', isLeaf: true },
        ],
      },
    ],
  },
  {
    title: '2021年',
    key: '0-1',
    children: [
      {
        title: '3月',
        key: '0-1-0',
        children: [{ title: '2021/3/10', key: '0-1-0-0', isLeaf: true }],
      },
      {
        title: '5月',
        key: '0-1-1',
        children: [{ title: '2021/5/1', key: '0-1-1-1', isLeaf: true }],
      },
    ],
  },
];

const Catalog: React.FC<{}> = ({}) => {
  const [visible, setVisible] = useState(true);
  const [margin, setMargin] = useState('0px');
  const Aside = styled('aside')`
    position: relative;
    left: 0;
    width: 300px;
    height: 100%;
    margin-left: ${margin};
    display: block;
    /*background:#f0f6fc;*/
    box-shadow: 1px 0 2px 0 rgb(32 33 36 / 28%);
    background: #fff;
  `;
  return (
    <Aside>
      <Select style={{ margin: '30px auto 40px' }}></Select>
      <Tree treeData={treeData_year} style={{
        left: '50px', fontSize:'16px'}}></Tree>
      {visible ? (
        <LeftCircleOutlined
          style={{ position: 'absolute', right: '-7px', top: '30%', color: 'rgb(32 33 36 / 28%)' }}
          onClick={() => {
            setVisible(false);
            setMargin('-300px');
          }}
        ></LeftCircleOutlined>
      ) : (
        <RightCircleOutlined
          style={{ position: 'absolute', right: '-14px', top: '30%', color: 'rgb(32 33 36 / 28%)' }}
          onClick={() => {
            setVisible(true);
            setMargin('0px');
          }}
        ></RightCircleOutlined>
      )}
    </Aside>
  );
};

export default Catalog;
