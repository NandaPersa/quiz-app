import React from 'react';
import { render, screen } from '@testing-library/react';
import { CircularProgressWithLabel } from '.';

describe('CircularProgressWithLabel Component', () => {
  it('renders CircularProgressWithLabel component', () => {
    render(
      <CircularProgressWithLabel
        correctQuestions={5}
        totalQuestions={10}
        value={50}
        variant="determinate"
      />,
    );
    expect(screen.getByText('5 / 10')).toBeTruthy();
  });

  it('renders CircularProgress with correct props', () => {
    const { container } = render(
      <CircularProgressWithLabel
        correctQuestions={5}
        totalQuestions={10}
        value={50}
        variant="determinate"
      />,
    );
    const circularProgress = container.querySelector('.circle');
    expect(circularProgress?.getAttribute('aria-valuenow')).toBe('50');
  });

  it('does not display text for indeterminate variant', () => {
    render(
      <CircularProgressWithLabel
        correctQuestions={5}
        totalQuestions={10}
        value={50}
        variant="indeterminate"
      />,
    );
    expect(screen.queryByText('5 / 10')).not.toBeTruthy();
  });
});
