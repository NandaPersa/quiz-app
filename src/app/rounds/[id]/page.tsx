'use client';

import { RoundState } from '@/atoms/rounds';
import { counterQuestions } from '@/atoms/rounds/selectors';
import BoxComponent from '@/components/ui/Box';
import ContainerComponent from '@/components/ui/Container';
import styles from '@/styles/pages/rounds.module.scss';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function Rounds() {
  const [currentRound, setCurrentRound] = useRecoilState(RoundState);
  const questionsCount = useRecoilValue(counterQuestions);
  const router = useRouter();

  const currentQuestion =
    currentRound.round?.questions[currentRound.currentQuestionIndex];

  async function handleAnswer(id: number) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BFF}/api/rounds/${currentRound.round.id}/answers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionId: currentQuestion.id,
          optionId: id,
        }),
      },
    );

    const { answer } = await res.json();

    if (currentRound.currentQuestionIndex + 1 === questionsCount) {
      router.push(`/rounds/${currentRound.round.id}/result`);
    }

    setCurrentRound({
      ...currentRound,
      round: {
        ...currentRound.round,
        answers: [...currentRound.round.answers, answer],
      },
      currentQuestionIndex: currentRound.currentQuestionIndex + 1,
    });
  }

  useEffect(() => {
    if (!currentRound.round?.id) {
      router.push('/');
    }
  }, [currentRound.round?.id, router]);

  return (
    <ContainerComponent>
      <h1 className={styles.title}>Quiz App</h1>
      <BoxComponent>
        <div className={styles.header}>
          <p>
            {currentRound.currentQuestionIndex + 1} / {questionsCount}
          </p>
          <p>
            Certas:{' '}
            {
              currentRound?.round?.answers.filter(
                (item) => item?.correct === true,
              ).length
            }
          </p>
        </div>
        <h2>{currentQuestion?.description}</h2>
        <div className={styles.buttonsSection}>
          {currentQuestion?.options.map((option) => (
            <Button
              key={option.id}
              className={styles.button}
              size="large"
              type="button"
              onClick={() => handleAnswer(option.id)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </BoxComponent>
    </ContainerComponent>
  );
}
