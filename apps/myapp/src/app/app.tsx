import React from 'react';
import { Highlight } from '@nx-react-syntax-highlighter/ui';

import './app.css';

import { ReactComponent as Logo } from './logo.svg';

export const App = () => {
  const json = '{"text": "Hello, World!"}';

  return (
    <div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to myapp!</h1>
      </header>
      <main>
        <Highlight>{json}</Highlight>
      </main>
    </div>
  );
};

export default App;
