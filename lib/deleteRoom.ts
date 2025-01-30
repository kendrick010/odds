import prisma from './prisma';

export default async function deleteRoom(roomId: string | null) {
  if (!roomId) return false;
  
  const existingGame = await prisma.gameRoom.delete({
    where: { room_id: roomId },
  });

  return existingGame !== null;
}
