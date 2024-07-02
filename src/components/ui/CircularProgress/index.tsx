import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './styles.module.scss';

export function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box className={styles.boxProgressCircle}>
      <CircularProgress
        className={styles.circle}
        variant="determinate"
        size="70"
        {...props}
      />
      <Box className={styles.boxProgress}>
        <p>{`2/5`}</p>
      </Box>
    </Box>
  );
}
