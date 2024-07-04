import { InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';
import HelperText from '../HelperText';
import { Control, Controller } from 'react-hook-form';

interface Category {
  id: number;
  name: string;
}
export type CategoriesProps = {
  categories: Category[];
  isError?: boolean;
  errorMessage?: string;
  control: Control<{ name: string; category: number }>;
};

const SelectInput = ({
  categories,
  isError = false,
  errorMessage = '',
  control,
}: CategoriesProps) => {
  return (
    <div className={styles.selectContainer}>
      <InputLabel className={styles.label}>Categoria</InputLabel>
      <div className={styles.content}>
        <Controller
          name="category"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              fullWidth
              label="Selecione uma categoria"
              size="small"
              defaultValue={'none'}
              className={isError ? styles.error : ''}
              onChange={onChange}
              onBlur={onBlur}
              value={value?.toString()}
            >
              <MenuItem value="none">
                <em className={styles.placeholder}>Selecione uma categoria</em>
              </MenuItem>
              {categories?.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          )}
        ></Controller>
        {isError && <HelperText errorMessage={errorMessage} />}
      </div>
    </div>
  );
};

export default SelectInput;
