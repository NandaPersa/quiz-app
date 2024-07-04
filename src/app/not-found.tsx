import ContainerComponent from '@/components/ui/Container';
import styles from '@/styles/pages/notFound.module.scss';
import { Button } from '@mui/material';

function NotFoundPage() {
  return (
    <ContainerComponent>
      <h1 className={styles.notFound}>404</h1>;
      <p className={styles.text}>Página não encontrada.</p>
      <Button type="submit" size="large" className={styles.button}>
        Retornar ao jogo
      </Button>
    </ContainerComponent>
  );
}

export default NotFoundPage;
