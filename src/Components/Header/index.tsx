import React, { useState } from 'react';
import Avatar from './Avatar';
import Search from './Search';
import Add from './AddButton';
import styled from 'styled-components';

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
  setInterval(() => {
    setDate(new Date().toLocaleDateString());
  });
  return (
    <>
      <LeftPart>
        <Avatar></Avatar>
        <span
          style={{
            fontSize: '22px'
          }}
        >
          {date}
        </span>
      </LeftPart>
      <RightPart>
        <Add></Add>
        <Search></Search>
      </RightPart>
    </>
  );
};

export default Header;
