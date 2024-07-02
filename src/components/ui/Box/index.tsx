import React from 'react';
import styles from './styles.module.scss';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const BoxComponent = ({ children }: Props) => {
  return (
    <Box component="section" className={styles.boxContainer}>
      {children}
    </Box>
  );
};

export default BoxComponent;
