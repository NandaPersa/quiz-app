import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import SelectInput, { CategoriesProps } from '.';

const categoriesMock = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
];

const WrapperComponent = (props: Partial<CategoriesProps>) => {
  const { control } = useForm<{ name: string; category: number }>();
  return (
    <SelectInput categories={categoriesMock} control={control} {...props} />
  );
};

describe('SelectInput Component', () => {
  it('renders SelectInput component', () => {
    render(<WrapperComponent />);
    expect(screen.getByText('Categoria')).toBeTruthy();
  });

  it('displays the correct categories', () => {
    render(<WrapperComponent />);
    fireEvent.mouseDown(screen.getByLabelText('Selecione uma categoria'));
    expect(screen.getByText('Category 1')).toBeTruthy();
    expect(screen.getByText('Category 2')).toBeTruthy();
  });

  it('displays the error message when isError is true', () => {
    render(<WrapperComponent isError={true} errorMessage="Error message" />);
    expect(screen.getByText('Error message')).toBeTruthy();
  });
});
