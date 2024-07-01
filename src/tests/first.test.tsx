// Button.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '@mui/material/Button';

test('renders Button with text "Hello world"', () => {
  render(<Button variant="contained">Hello world</Button>);
  const buttonElement = screen.getByText(/Hello world/i);
  expect(buttonElement).toBeTruthy();
});
