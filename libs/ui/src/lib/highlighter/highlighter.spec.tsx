import React from 'react';
import { render } from '@testing-library/react';

import Highlighter from './highlighter';

describe('Highlighter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Highlighter />);
    expect(baseElement).toBeTruthy();
  });
});
