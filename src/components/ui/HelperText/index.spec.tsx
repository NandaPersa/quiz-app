import React from 'react';
import { render, screen } from '@testing-library/react';
import HelperText from '.';

describe('HelperText Component', () => {
  it('renders with provided error message', () => {
    const errorMessage = 'This is an error';
    render(<HelperText errorMessage={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeTruthy();
  });
});
