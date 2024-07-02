import { InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

const SelectInput: React.FC = () => {
  return (
    <div className={styles.selectContainer}>
      <InputLabel className={styles.label}>Categoria</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        placeholder="Selecione uma categoria"
        fullWidth
        size="small"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
};

export default SelectInput;
