"use client";

import { useParams } from "next/navigation";
import ActiveUsersRibbon from "../../../components/activeUsersRibbon";

export default function GameRoomPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const userId = "someUniqueUserId";

  return (
    <div>
      <h1>Game Room: {roomId}</h1>
      <ActiveUsersRibbon roomId={roomId} userId={userId} />
    </div>
  );
}
