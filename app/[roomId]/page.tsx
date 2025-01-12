export default async function GameRoom({ params }: { params: { roomId: string } }) {
  const { roomId } = params;

  // Simulate checking room availability
  const isRoomFull = await gameRoomState(roomId);

  if (isRoomFull) {
    return (
      <div>
        <h1>Game Room {roomId}</h1>
        <p>This room is full. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Game Room {roomId}</h1>
      <p>Welcome to the game room!</p>
    </div>
  );
}

// Simulate a function to check if a room is full
async function gameRoomState(roomId: string): Promise<boolean> {
  return roomId === "fullRoom";
}
