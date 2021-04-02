import React, { useState } from 'react';
import Avatar from './avatar';
// import styled from 'styled-components';

const Header: React.FC<{}> = ({}) => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  setInterval(() => {
    setDate(new Date().toLocaleDateString());
  });
  return (
    <div style={{width:'40%', background: 'red'}}>
      <Avatar></Avatar>
      <span>{date}</span>
    </div>
  );
};

export default Header;
