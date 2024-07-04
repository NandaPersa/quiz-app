import React from 'react';

import TextField from '@mui/material/TextField';
import styles from './styles.module.scss';
import { InputLabel } from '@mui/material';
import HelperText from '../HelperText';
import { Control, Controller } from 'react-hook-form';

interface Props {
  isError?: boolean;
  errorMessage?: string;
  control: Control<{ name: string; category: number }>;
}

const TextFieldInput = ({
  control,
  errorMessage = '',
  isError = false,
}: Props) => {
  return (
    <div className={styles.container}>
      <InputLabel className={styles.label}>Jogador</InputLabel>
      <div className={styles.content}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              placeholder="Nome"
              variant="outlined"
              fullWidth
              size="small"
              className={isError ? styles.error : ''}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        ></Controller>
        <HelperText errorMessage={errorMessage} />
      </div>
    </div>
  );
};

export default TextFieldInput;
