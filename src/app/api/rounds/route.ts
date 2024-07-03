import { NextResponse } from 'next/server';

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
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};
