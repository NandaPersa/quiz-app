import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/categories`);
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};
