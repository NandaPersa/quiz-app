import BoxComponent from '@/components/ui/Box';
import ContainerComponent from '@/components/ui/Container';
import SelectInput from '@/components/ui/Select';
import TextFieldInput from '@/components/ui/TextField';
import styles from '@/styles/pages/home.module.scss';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <ContainerComponent>
      <h1 className={styles.title}>Quiz App</h1>
      <BoxComponent>
        <TextFieldInput />
        <SelectInput />
        <Button size="large" className={styles.button}>
          Jogar
        </Button>
      </BoxComponent>
    </ContainerComponent>
  );
}
