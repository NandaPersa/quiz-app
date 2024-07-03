import { NextResponse } from 'next/server';

interface Params {
  params: { id: number };
}

export const POST = async (request: Request, { params }: Params) => {
  const { questionId, optionId } = await request.json();

  try {
    const response = await fetch(
      `${process.env.API_URL}/rounds/${params.id}/answers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answer: {
            question_id: questionId,
            option_id: optionId,
          },
        }),
      },
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};
