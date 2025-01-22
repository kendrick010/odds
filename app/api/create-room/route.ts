import { NextResponse } from 'next/server';
import createRoom from '@/lib/createRoom';

export async function POST() {
  try {
    const gameRoom = await createRoom();
    return NextResponse.json({ success: true, roomId: gameRoom.room_id });
  } 
  catch {
    return NextResponse.json({ success: false, error: 'Failed to Create Game' }, { status: 500 });
  }
}
