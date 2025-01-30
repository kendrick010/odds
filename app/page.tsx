'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { handleCreateGame, handleJoinGame } from '../lib/gameOptions';
import GameRoomPrompt from '@/components/gameRoomPrompt';

export default function HomePage() {
  const [gameRoomPromptState, setGameRoomPromptState] = useState(false);
  const router = useRouter();

  return (
    <div>
      <h1>Welcome to the Game</h1>
      <button onClick={() => handleCreateGame(router)}>Create Game</button>
      <button onClick={() => setGameRoomPromptState(true)}>Join Game</button>

      <GameRoomPrompt
        isOpen={gameRoomPromptState}
        onClose={() => setGameRoomPromptState(false)}
        onSubmit={(roomId) => handleJoinGame(router, roomId)}
      >
        <h2>Enter Game Code</h2>
      </GameRoomPrompt>
    </div>
  );
}
