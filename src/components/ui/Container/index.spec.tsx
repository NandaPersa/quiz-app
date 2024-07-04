import React from 'react';
import { render, screen } from '@testing-library/react';
import ContainerComponent from '.';

describe('ContainerComponent', () => {
  it('renders children correctly', () => {
    render(
      <ContainerComponent>
        <div>Test Child</div>
      </ContainerComponent>,
    );
    expect(screen.getByText('Test Child')).toBeTruthy();
  });

  it('applies the correct className to the Container component', () => {
    const { container } = render(
      <ContainerComponent>
        <div>Test Child</div>
      </ContainerComponent>,
    );
    const containerElement = container.querySelector('.MuiContainer-root');
    expect(containerElement?.getAttribute('class')).toContain('container');
  });
});
