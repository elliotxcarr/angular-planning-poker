import { Component, inject } from '@angular/core';
import { MainStore } from '../../store/main.store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faClock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-window',
  imports: [FontAwesomeModule],
  templateUrl: './player-window.html',
  styleUrl: './player-window.css',
})
export class PlayerWindow {
  faCircleCheck = faCircleCheck;
  faClock = faClock;
  readonly _mainStore = inject(MainStore);
}
