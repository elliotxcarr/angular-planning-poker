export interface Player {
  id: string;
  name: string;
  vote: number;
  socketId: string;
}

export interface Room {
  id: string;
  players: Player[];
  revealed: boolean;
  votes: [];
}

export interface MainSlice {
  room: Room | null;
  player: Player | null;
  error: string;
  inGame: boolean;
  numbers: number[];
}

export const initialMainSlice: MainSlice = {
  room: null,
  player: null,
  error: '',
  inGame: false,
  numbers: [1, 2, 3, 5, 8, 13, 20]
}