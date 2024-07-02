import Box from '@/components/ui/Box';
import SelectInput from '@/components/ui/Select';
import TextFieldInput from '@/components/ui/TextField';
import styles from '@/styles/pages/home.module.scss';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Quiz App</h1>
      <Box>
        <TextFieldInput />
        <SelectInput />
        <Button className={styles.button}>Jogar</Button>
      </Box>
    </main>
  );
}
