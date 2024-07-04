import { NextResponse } from 'next/server';

export type Option = {
  id: number;
  label: string;
};

export type Question = {
  description: string;
  id: number;
  options: Option[];
};

export type Answer = {
  id: number;
  question_id: number;
  option_id: number;
  correct: boolean;
};

export type Round = {
  answers: Answer[];
  id: number;
  player_id: number;
  questions: Question[];
};

export const POST = async (request: Request) => {
  const { playerName, categoryId } = await request.json();

  try {
    const response = await fetch(`${process.env.API_URL}/rounds`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        round: {
          player_name: playerName,
          category_id: categoryId,
        },
      }),
    });
    const data: { round: Round } = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};
