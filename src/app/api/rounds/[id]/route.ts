import { NextResponse } from 'next/server';
interface Params {
  params: { id: number };
}

export const GET = async (request: Request, { params }: Params) => {
  try {
    const response = await fetch(`${process.env.API_URL}/rounds/${params.id}`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};
