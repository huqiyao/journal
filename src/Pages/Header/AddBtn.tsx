import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

const AddButton: React.FC<{}> = ({}) => {
  return <PlusOutlined style={{marginRight: '30px',cursor:'pointer',fontSize:'16px'}} className='operate-icon'></PlusOutlined>;
};

export default AddButton;
