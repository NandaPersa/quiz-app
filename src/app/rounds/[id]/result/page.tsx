'use client';

import BoxComponent from '@/components/ui/Box';
import ContainerComponent from '@/components/ui/Container';
import styles from '@/styles/pages/rounds.module.scss';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { CircularProgressWithLabel } from '@/components/ui/CircularProgress';
import { useEffect, useState } from 'react';
import { RoundResult } from '@/app/api/rounds/[id]/result/route';
import { useRouter } from 'next/navigation';
import { CurrentRound, RoundState } from '@/atoms/rounds';
import { useRecoilState } from 'recoil';

interface Props {
  params: { id: string };
}

async function getResult(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BFF}/api/rounds/${id}/result`,
    {
      cache: 'force-cache',
    },
  );
  return await res.json();
}

export default function Result({ params }: Props) {
  const [result, setResult] = useState<RoundResult>();
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line no-unused-vars
  const [_, setCurrentRound] = useRecoilState(RoundState);
  const router = useRouter();

  useEffect(() => {
    async function handleGetResult() {
      if (params?.id) {
        const round = await getResult(params?.id?.toString());
        setResult(round);
        setLoading(false);
      }
    }
    handleGetResult();
  }, [params.id]);

  const progressValue =
    ((result?.round?.total_correct_answers || 0) * 100) /
    (result?.round?.total_questions || 0);

  function handleFinish() {
    setCurrentRound({} as CurrentRound);
    router.push('/');
  }

  return (
    <ContainerComponent>
      <h1 className={styles.title}>Quiz App</h1>
      <BoxComponent>
        <h2>Resultado</h2>
        <CircularProgressWithLabel
          correctQuestions={result?.round.total_correct_answers || 0}
          totalQuestions={result?.round?.total_questions || 0}
          value={progressValue}
          variant={loading ? 'indeterminate' : 'determinate'}
        />
        {result?.round.total_correct_answers && (
          <Rating
            name="half-rating-read"
            precision={1}
            value={result?.round.total_correct_answers}
            readOnly
            size="large"
          />
        )}
        {!loading && (
          <Button
            className={styles.button}
            size="large"
            onClick={() => handleFinish()}
          >
            Finalizar
          </Button>
        )}
      </BoxComponent>
    </ContainerComponent>
  );
}
