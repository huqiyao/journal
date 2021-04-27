import React, { useState } from 'react';
import styled from 'styled-components';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

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
   box-shadow:1px 0 2px 0 rgb(32 33 36 / 28%);
    background: #fff;
  `;
  return (
    <Aside>
      {visible ? (
        <LeftCircleOutlined
          style={{ position: 'absolute', right: '-7px', top: '30%',color:'rgb(32 33 36 / 28%)' }}
          onClick={() => {
            setVisible(false);
            setMargin('-300px');
          }}
        ></LeftCircleOutlined>
      ) : (
        <RightCircleOutlined
          style={{ position: 'absolute', right: '-14px', top: '30%',color:'rgb(32 33 36 / 28%)' }}
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
