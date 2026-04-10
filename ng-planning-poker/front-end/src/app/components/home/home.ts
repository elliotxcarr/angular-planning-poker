import { Component, inject } from '@angular/core';
import { MainStore } from '../../store/main.store';
import { SocketService } from '../../services/socket.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faArrowRightFromBracket, faQuestion} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { PlayerWindow } from '../player-window/player-window';

@Component({
  selector: 'app-home',
  imports: [ FontAwesomeModule, CommonModule, PlayerWindow],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  faArrowRightFromBracket = faArrowRightFromBracket;
  faQuestion = faQuestion;
  readonly _mainStore = inject(MainStore);
  readonly _socketService = inject(SocketService);

  isSelected = (num: number) => {
    return this._mainStore.player()?.vote === num
  }
  hasVoted = () => {
    return this._mainStore.player()?.vote != null;
  }
}
