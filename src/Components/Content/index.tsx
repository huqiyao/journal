import React from 'react';
import styled from 'styled-components';
import './index.css'
import { Slate, Editable } from 'slate-react';
const Section = styled('section')`
  /*padding: 10px 7px;*/
  flex: 1;
`;

const Content: React.FC<{}> = ({}) => {
  return (
    <Section>
      <div className="content-container" style={{ height: '100%', width: 'auto', background: '#f1f3f4' }}>
        <ul className="page">
          <li className="cover-page"></li>
          <li className="inside-page"></li>
          <li className="inside-page"></li>
          <li className="inside-page"></li>
          <li className="inside-page"></li>
          <li className="inside-page"></li>
          <li className="end-page"></li>
        </ul>
      </div>
    </Section>
  );
};

export default Content;
