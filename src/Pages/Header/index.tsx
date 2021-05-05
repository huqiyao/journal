import React, { useState } from 'react';
import Avatar from './Avatar';
import Search from './Search';
import AddBtn from './AddBtn';
import PlugBtn from './PlugBtn';
import CloudBtn from './CloudBtn';
import SettingBtn from './SettingBtn';
import styled from 'styled-components';
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
interface IProps {
  marginLeft?: string;
}

const HeaderContainer = styled.div`
  position: relative;
  height: 64px;
  /*background-color: #f1f3f4;*/
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  /*font-size: calc(10px + 2vmin);*/
  top: 0;
  margin-top: ${(props: IProps) => props.marginLeft || '0px'};
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  background: #fff;
`;
const LeftPart = styled.div`
  width: 200px;
  min-width: 186px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const RightPart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Header: React.FC<{}> = ({}) => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [visible, setVisible] = useState(true);
  const [margin, setMargin] = useState('0px');
  setInterval(() => {
    setDate(new Date().toLocaleDateString());
  });
  return (
    <HeaderContainer marginLeft={margin}>
      {visible ? (
        <UpCircleOutlined
          style={{ position: 'absolute', top: '57px', left: '50%', color: 'rgb(32 33 36 / 28%)' }}
          onClick={() => {
            setVisible(false);
            setMargin('-64px');
          }}
        ></UpCircleOutlined>
      ) : (
        <DownCircleOutlined
          style={{ position: 'absolute', top: '64px', left: '50%', color: 'rgb(32 33 36 / 28%)' }}
          onClick={() => {
            setVisible(true);
            setMargin('0px');
          }}
        ></DownCircleOutlined>
      )}
      <LeftPart>
        <Avatar></Avatar>
        <span
          style={{
            fontSize: '18px',
            border: '1px solid rgb(32 33 36 / 28%)',
            padding:'4px'
          }}
        >
          {date}
        </span>
      </LeftPart>
      <RightPart>
        <AddBtn/>
        <PlugBtn/>
        <SettingBtn/>
        <CloudBtn/>
        <Search></Search>
      </RightPart>
    </HeaderContainer>
  );
};

export default Header;
