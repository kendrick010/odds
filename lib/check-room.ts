import prisma from './prisma';

export default async function checkRoom(roomId: string | null) {
  if (!roomId) return false;

  const existingGame = await prisma.gameRoom.findUnique({
    where: { room_id: roomId },
  });

  return existingGame !== null;
}
