import { Component, inject, signal } from '@angular/core';
import { Welcome } from './components/welcome/welcome';
import { MainStore } from './store/main.store';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [Welcome, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-planning-poker');
  readonly _mainStore = inject(MainStore);
}
