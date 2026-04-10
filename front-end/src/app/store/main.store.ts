import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { initialMainSlice, Player, Room } from "./main.slice";
import { computed } from "@angular/core";

export const MainStore = signalStore(
  { providedIn: 'root' },
  withState(initialMainSlice),
  withComputed((store) => {
    return {
      allVoted: computed(() => {
        if(!store.room()?.players) return false;
        return store.room()?.players.every(a => a.vote != null);
      }),
    }
  }),
  withMethods((store) => {
    return {
      setRoom: (room: Room | null) => patchState(store, { room: room }),
      setPlayer: (player: Player) => patchState(store, { player: player}),
      setError: (err: string) => patchState(store, { error: err }),
      setInGame: (val: boolean) => patchState(store, { inGame: val }),
    }
  }),
)