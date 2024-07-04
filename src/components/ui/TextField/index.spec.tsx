/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import TextFieldInput from '.';

const WrapperComponent = () => {
  const { control } = useForm<{ name: string; category: number }>();
  return (
    <TextFieldInput
      isError={true}
      errorMessage="Error message"
      control={control}
    />
  );
};

describe('TextFieldInput Component', () => {
  it('renders TextFieldInput component', () => {
    render(<WrapperComponent />);
    expect(screen.getByPlaceholderText('Nome')).toBeTruthy();
  });

  it('displays the error message when isError is true', () => {
    render(<WrapperComponent />);
    expect(screen.getByText('Error message')).toBeTruthy();
  });

  it('should call onChange function when input value changes', () => {
    render(<WrapperComponent />);
    const input = screen.getByPlaceholderText('Nome');
    fireEvent.change(input, { target: { value: 'New Name' } });
    // @ts-ignore
    expect(input.value).toEqual('New Name');
  });
});
