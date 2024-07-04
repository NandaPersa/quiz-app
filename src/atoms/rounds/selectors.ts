import { selector } from 'recoil';
import { RoundState } from '.';

export const counterQuestions = selector({
  key: 'counterQuestions',
  get: ({ get }) => {
    const currentRound = get(RoundState);
    return currentRound.round?.questions?.length || 0;
  },
});
