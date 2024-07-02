import styles from './styles.module.scss';
import { Container } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export default function ContainerComponent({ children }: Props) {
  return <Container className={styles.container}>{children}</Container>;
}
