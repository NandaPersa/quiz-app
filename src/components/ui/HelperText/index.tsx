import React from 'react';
import styles from './styles.module.scss';

interface Props {
  errorMessage?: string;
}

const HelperText = ({ errorMessage = '' }: Props) => {
  return <span className={styles.helperText}>{errorMessage}</span>;
};

export default HelperText;
