'use client';

import ContainerComponent from '@/components/ui/Container';
import styles from '@/styles/pages/notFound.module.scss';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

function NotFoundPage() {
  const router = useRouter();

  function handleClick() {
    router.push('/');
  }
  return (
    <ContainerComponent>
      <h1 className={styles.notFound}>404</h1>;
      <p className={styles.text}>Página não encontrada.</p>
      <Button
        type="submit"
        size="large"
        className={styles.button}
        onClick={() => handleClick()}
      >
        Retornar ao jogo
      </Button>
    </ContainerComponent>
  );
}

export default NotFoundPage;
