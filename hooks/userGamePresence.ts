import { useEffect, useState } from "react";
import supabase from "../lib/supabase";

const UserGamePresence = (roomId: string, userId: string) => {
  const [players, setPlayers] = useState<string[]>([]);

  useEffect(() => {
    // Join the game channel
    const channel = supabase.channel(`game-${roomId}`, {
      config: { presence: { key: userId } },
    });

    // Track when the player joins
    channel.subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        await channel.track({});
      }
    });

    // Listen for presence changes
    channel.on("presence", { event: "sync" }, () => {
      const state = channel.presenceState();
      const activePlayers = Object.keys(state);
      setPlayers(activePlayers);

      // Check if all players have left and mark the game as inactive
      if (activePlayers.length === 0) console.log("empty");
    });

    return () => {
      channel.untrack();
      channel.unsubscribe();
    };
  }, [roomId, userId]);

  return players;
};

export default UserGamePresence;
