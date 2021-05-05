import React from 'react';
import { Select as AntdSelect } from 'antd';
const { Option } = AntdSelect;

interface ISelectProps{
  style: React.CSSProperties
}
const Select: React.FC<ISelectProps> = ({style}) => {
  return (
    <div style={style}>
      分类方式：
      <AntdSelect defaultValue="year">
        <Option value="year">按年份分类</Option>
        <Option value="month">按月份分类</Option>
      </AntdSelect>
    </div>
  );
};

export default Select;
