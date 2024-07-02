import React from 'react';

import TextField from '@mui/material/TextField';
import styles from './styles.module.scss';
import { InputLabel } from '@mui/material';

const TextFieldInput: React.FC = () => {
  return (
    <div className={styles.container}>
      <InputLabel className={styles.label}>Jogador</InputLabel>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Nome"
        variant="filled"
        fullWidth
      />
    </div>
  );
};

export default TextFieldInput;
