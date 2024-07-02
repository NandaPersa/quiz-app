import BoxComponent from '@/components/ui/Box';
import ContainerComponent from '@/components/ui/Container';
import styles from '@/styles/pages/rounds.module.scss';
import { Button } from '@mui/material';

export default function Rounds() {
  return (
    <ContainerComponent>
      <h1 className={styles.title}>Quiz App</h1>
      <BoxComponent>
        <div className={styles.header}>
          <p>1/5</p>
          <p>Certas: 0</p>
        </div>
        <h2> Qual o planeta mais perto do sol?</h2>
        <div className={styles.buttonsSection}>
          <Button className={styles.button} size="large">
            Jogar
          </Button>
          <Button className={styles.button} size="large">
            Jogar
          </Button>
          <Button className={styles.button} size="large">
            Jogar
          </Button>
          <Button className={styles.button} size="large">
            Jogar
          </Button>
        </div>
      </BoxComponent>
    </ContainerComponent>
  );
}
