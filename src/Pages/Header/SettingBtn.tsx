import React from 'react';
import { SettingOutlined} from '@ant-design/icons';

const SettingBtn: React.FC<{}> = ({}) => {
  return <SettingOutlined style={{marginRight: '30px',cursor:'pointer',fontSize:'16px'}} className='operate-icon'></SettingOutlined>;
};

export default SettingBtn;
