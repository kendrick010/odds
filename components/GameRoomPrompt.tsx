import React, { useState } from "react";

interface GameRoomPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (roomId: string) => void;
  children: React.ReactNode;
}

export default function GameRoomPrompt({
  isOpen,
  onClose,
  onSubmit,
  children,
}: GameRoomPromptProps) {
  const [roomId, setRoomId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (roomId) {
      onSubmit(roomId.trim());
      onClose();
    }
  };

  return (
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>X</button>
        {children}
        <input
          type="text"
          placeholder="######"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
