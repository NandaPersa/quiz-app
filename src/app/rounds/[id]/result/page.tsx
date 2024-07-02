import BoxComponent from '@/components/ui/Box';
import ContainerComponent from '@/components/ui/Container';
import styles from '@/styles/pages/rounds.module.scss';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { CircularProgressWithLabel } from '@/components/ui/CircularProgress';

export default function Result() {
  return (
    <ContainerComponent>
      <h1 className={styles.title}>Quiz App</h1>
      <BoxComponent>
        <h2>Resultado</h2>
        <CircularProgressWithLabel value={50} />
        <Rating
          name="half-rating-read"
          precision={0.5}
          value={4}
          readOnly
          size="large"
        />
        <Button className={styles.button} size="large">
          Fim
        </Button>
      </BoxComponent>
    </ContainerComponent>
  );
}
