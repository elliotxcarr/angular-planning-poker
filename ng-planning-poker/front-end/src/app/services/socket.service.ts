import { assertInInjectionContext, inject, Injectable } from "@angular/core";
import { io, Socket } from "socket.io-client";
import { MainStore } from "../store/main.store";
import { Player, Room } from "../store/main.slice";

@Injectable({providedIn: 'root'})
export class SocketService {
  private socket: Socket;
  readonly _mainStore = inject(MainStore)

  constructor () {
    this.socket = io('http://localhost:3001', { transports: ['websocket'] });
    this.socket.on("update_room", (value: Room) => {
      this._mainStore.setRoom(value);
    });
    this.socket.on("player_id", (player: Player) => this._mainStore.setPlayer(player));
    this.socket.on('error', (err: string) => this._mainStore.setError(err))
  }

  joinRoom = (
    id: string,
    name: string,
  ) => {
    this._mainStore.setError('');
    this.socket.emit("join_room", { id, name });
    if(!this._mainStore.error) this._mainStore.setInGame(true);
  }

  createRoom = (name: string) => {
    if (!name) return;
    console.log(name)
    this.socket.emit("create_room", { name });
    this._mainStore.setInGame(true);
  }

  vote = (
    number: number,
  ) => {
    this.socket.emit('vote', {
    roomId: this._mainStore.room()?.id,
    playerId: this._mainStore.player()?.id,
    vote: number
  })};

  reveal = () => this.socket.emit('reveal', {roomId: this._mainStore.room()?.id});

  refresh = () => this.socket.emit('reset', {roomId: this._mainStore.room()?.id});

  leave = () => {
    this.socket.emit('leave');
    this._mainStore.setInGame(false);
    this._mainStore.setRoom(null);
  }
}