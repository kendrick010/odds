import { customAlphabet } from 'nanoid';
import prisma from './prisma';
import checkRoom from './checkRoom';

const roomIdGenerator = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 6);

export default async function createRoom() {
  let roomId: string;

  // Regenerate if not unique
  do {
    roomId = roomIdGenerator();
  } while (await checkRoom(roomId));

  // Create a new game room entry in the database
  const gameRoom = await prisma.gameRoom.create({
    data: {
      room_id: roomId,
      date: new Date(),
      players: [],
      occupancy: 0,
    },
  });

  return gameRoom;
}
