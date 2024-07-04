import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './styles.module.scss';

interface Props extends CircularProgressProps {
  correctQuestions: number;
  totalQuestions: number;
  value: number;
  variant: 'determinate' | 'indeterminate';
}

export function CircularProgressWithLabel({
  correctQuestions,
  totalQuestions,
  variant,
  ...props
}: Props) {
  return (
    <Box className={styles.boxProgressCircle}>
      <CircularProgress
        className={styles.circle}
        variant={variant}
        size="70"
        {...props}
      />
      <Box className={styles.boxProgress}>
        {variant === 'determinate' && (
          <p>
            {correctQuestions} / {totalQuestions}
          </p>
        )}
      </Box>
    </Box>
  );
}
