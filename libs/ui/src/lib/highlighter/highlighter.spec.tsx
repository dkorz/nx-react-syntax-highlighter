import React from 'react';
import { render } from '@testing-library/react';

import Highlighter from './highlighter';

describe('Highlighter', () => {
  const json = '{"test": 42}';
  it('should render successfully', () => {
    const { baseElement } = render(<Highlighter>{json}</Highlighter>);
    expect(baseElement).toBeTruthy();
  });
});
