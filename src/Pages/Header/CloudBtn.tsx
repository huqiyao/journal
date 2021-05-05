import React from 'react';
import { CloudUploadOutlined} from '@ant-design/icons';

const CloudBtn: React.FC<{}> = ({}) => {
  return <CloudUploadOutlined style={{marginRight: '30px',cursor:'pointer',fontSize:'16px'}} className='operate-icon'></CloudUploadOutlined>;
};

export default CloudBtn;
