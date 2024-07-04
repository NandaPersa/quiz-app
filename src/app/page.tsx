'use client';

import BoxComponent from '@/components/ui/Box';
import ContainerComponent from '@/components/ui/Container';
import SelectInput from '@/components/ui/Select';
import TextFieldInput from '@/components/ui/TextField';
import styles from '@/styles/pages/home.module.scss';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { RoundState } from '@/atoms/rounds';
import { useRecoilState } from 'recoil';

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BFF}/api/categories`, {
    cache: 'force-cache',
  });
  return res.json();
}

const UserSchema = z.object({
  name: z
    .string({ message: 'Informe um nome de usuário' })
    .min(1, { message: 'Informe um nome de usuário' }),
  category: z.number({ message: 'Selecione uma categoria' }),
});

export type UserRoundType = z.infer<typeof UserSchema>;

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [currentRound, setCurrentRound] = useRecoilState(RoundState);
  const router = useRouter();

  useEffect(() => {
    async function handleGetCategories() {
      const result = await getCategories();
      setCategories(result.categories);
    }

    handleGetCategories();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRoundType>({
    resolver: zodResolver(UserSchema),
    mode: 'onChange',
  });

  async function handleCreateRound(data: UserRoundType) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BFF}/api/rounds/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        playerName: data.name,
        categoryId: data.category,
      }),
    });

    return await res.json();
  }

  const onSubmit = async (data: UserRoundType) => {
    const { round } = await handleCreateRound(data);
    if (round.id) {
      setCurrentRound({ ...currentRound, round, currentQuestionIndex: 0 });
      toast.success('Tudo certo! Prepare-se para testar seu conhecimento.');
      router.push(`/rounds/${round.id}`);
    } else {
      toast.error('Algo deu errado. Tente novamente!');
    }
  };

  return (
    <ContainerComponent>
      <h1 className={styles.title}>Quiz App</h1>
      <form
        className="w-full space-y-6 sm:max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BoxComponent>
          <TextFieldInput
            isError={!!errors.name?.message}
            errorMessage={errors.name?.message}
            control={control}
          />
          <SelectInput
            isError={!!errors.category?.message}
            errorMessage={errors.category?.message}
            categories={categories}
            control={control}
          />
          <Button type="submit" size="large" className={styles.button}>
            Jogar
          </Button>
        </BoxComponent>
      </form>
    </ContainerComponent>
  );
}
