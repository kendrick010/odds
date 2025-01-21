import { NextRequest, NextResponse } from 'next/server';
import checkRoom from '@/lib/check-room';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const roomId = searchParams.get("roomId");

  try {
    const validRoom = await checkRoom(roomId);
    return NextResponse.json({ success: true, validRoom: validRoom });
  } 
  catch {
    return NextResponse.json({ success: false, error: 'Unknown Room' }, { status: 500 });
  }
}
