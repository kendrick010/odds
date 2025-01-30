import { useRouter } from 'next/navigation';

export const handleCreateGame = async (router: ReturnType<typeof useRouter>) => {
  const response = await fetch('/api/create-room', { method: 'POST' });
  const data = await response.json();

  if (data.success) router.push(`/game/${data.roomId}`);
};

export const handleJoinGame = async (router: ReturnType<typeof useRouter>, roomId: string) => {
  const response = await fetch(`/api/check-room?roomId=${roomId}`, { method: 'GET' });
  const data = await response.json();

  if (data.success && data.validRoom) router.push(`/game/${roomId}`);
  else alert('Invalid Room Code');
};
