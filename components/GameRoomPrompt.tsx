import React from 'react';

interface GameRoomPromptProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function GameRoomPrompt({ isOpen, onClose, children }: GameRoomPromptProps) {
  if (!isOpen) return null;

  return (
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}
