'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import GameRoomPrompt from '../components/GameRoomPrompt';

export default function HomePage() {
  const [gameRoomPromptState, setGameRoomPromptState] = useState(false);
  const router = useRouter();

  const handleCreateGame = async () => {
    const response = await fetch('/api/create-room', { method: 'POST' });
    const data = await response.json();

    if (data.success) {
      router.push(`/game/${data.gameId}`);
    }
  };

  return (
    <div>
      <h1>Welcome to the Game</h1>
      <button onClick={handleCreateGame}>Create Game</button>
      <button onClick={() => setGameRoomPromptState(true)}>Join Game</button>

      <GameRoomPrompt isOpen={gameRoomPromptState} onClose={() => setGameRoomPromptState(false)}>
        <h2>Enter Game Code</h2>
        <input
          type="text"
          placeholder="######"
        />
        <button>Submit</button>
      </GameRoomPrompt>
    </div>
  );
};
