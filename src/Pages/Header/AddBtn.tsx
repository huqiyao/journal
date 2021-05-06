import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import store from '../../Utils/store';

const AddButton: React.FC<{}> = ({}) => {
  return (
    <PlusOutlined
      style={{ marginRight: '30px', cursor: 'pointer', fontSize: '16px' }}
      className="operate-icon"
      onClick={() => {
        store.setState({ open: true });
      }}
    ></PlusOutlined>
  );
};

export default AddButton;
