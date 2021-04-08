import React from 'react';
import styled from 'styled-components';
const Section = styled('section')`
  padding: 10px 7px;
  background: white;
  flex: 1;
`;

const Content: React.FC<{}> = ({}) => {
  return (
    <Section>
      <div style={{ height: '100%', width: 'auto', background: 'red' }}></div>
    </Section>
  );
};

export default Content;
