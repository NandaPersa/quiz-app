import { Round } from '@/app/api/rounds/route';
import { atom } from 'recoil';

export type CurrentRound = {
  round: Round;
  currentQuestionIndex: number;
};

export const RoundState = atom<CurrentRound>({
  key: 'roundState',
  default: {} as CurrentRound,
});
