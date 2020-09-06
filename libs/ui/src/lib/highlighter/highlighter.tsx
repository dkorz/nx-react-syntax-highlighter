import React, { ReactNode, ReactNodeArray } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './highlighter.css';

SyntaxHighlighter.registerLanguage('json', json);

/* eslint-disable-next-line */
export interface HighlighterProps {
  children: ReactNode | ReactNodeArray;
}

export const Highlighter = ({ children }: HighlighterProps) => {
  return (
    <SyntaxHighlighter language="json" style={atomDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Highlighter;
