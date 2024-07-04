import React from 'react';
import { render, screen } from '@testing-library/react';
import BoxComponent from '.';

describe('BoxComponent', () => {
  it('renders children correctly', () => {
    render(
      <BoxComponent>
        <div>Test Child</div>
      </BoxComponent>,
    );
    expect(screen.getByText('Test Child')).toBeTruthy();
  });

  it('applies the correct className to the Box component', () => {
    const { container } = render(
      <BoxComponent>
        <div>Test Child</div>
      </BoxComponent>,
    );
    const boxElement = container.querySelector('section');
    expect(boxElement?.getAttribute('class')).toContain('boxContainer');
  });
});
