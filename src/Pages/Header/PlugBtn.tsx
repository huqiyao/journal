import React from 'react';
import { AppstoreAddOutlined } from '@ant-design/icons';
const PlugBtn: React.FC<{}> = ({}) => {
  return <AppstoreAddOutlined style={{ marginRight: '30px',cursor:'pointer',fontSize:'16px'}} className='operate-icon'></AppstoreAddOutlined>;
};

export default PlugBtn;
