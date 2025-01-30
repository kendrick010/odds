import UserGamePresence from "@/hooks/userGamePresence";

interface ActiveUsersProps {
    roomId: string;
    userId: string;
  }

export default function ActiveUsersRibbon({ roomId, userId }: ActiveUsersProps) {
    const players = UserGamePresence(roomId, userId);

    return (
        <div>
        <h2>Active Players:</h2>
        <ul>
            {players.map((player) => (
            <li key={player}>{player}</li>
            ))}
        </ul>
        </div>
    );
}
