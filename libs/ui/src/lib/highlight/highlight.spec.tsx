import React from 'react';
import { render } from '@testing-library/react';

import Highlight from './highlight';

describe('Highlighter', () => {
  const json = '{"test": 42}';
  it('should render successfully', () => {
    const { baseElement } = render(<Highlight>{json}</Highlight>);
    expect(baseElement).toBeTruthy();
  });
});
