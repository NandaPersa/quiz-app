import { NextResponse } from 'next/server';
interface Params {
  params: { id: number };
}

export type RoundResult = {
  round: {
    id: number;
    player_id: number;
    total_questions: number;
    total_answered_questions: number;
    total_correct_answers: number;
  };
};

export const GET = async (request: Request, { params }: Params) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/rounds/${params.id}/result`,
    );
    const data: RoundResult = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};
