import { Component, inject } from '@angular/core';
import { MainStore } from '../../store/main.store';
import { SocketService } from '../../services/socket.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

enum Action {
  Create = 0,
  Join = 1
}

@Component({
  selector: 'app-welcome',
  imports: [FontAwesomeModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  action: number | null = null;
  Action = Action;
  faBackward = faBackward;
  readonly _mainStore = inject(MainStore);
  readonly _socketService = inject(SocketService);
  roomId: string = '';
  name: string = '';

  setRoomId = (id: string) => this.roomId = id;
  setAction = (val: number | null) => this.action = val;
  setName = (name: string) => this.name = name;

  buildReq = () => {
    console.log(this.action)
    if(this.action === Action.Create){
      this._socketService.createRoom(this.name)
    }
    else if(this.action === Action.Join){
      this._socketService.joinRoom(this.roomId, this.name);
    }
    
  }
}
