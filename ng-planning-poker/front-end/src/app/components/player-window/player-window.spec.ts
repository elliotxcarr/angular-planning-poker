import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWindow } from './player-window';

describe('PlayerWindow', () => {
  let component: PlayerWindow;
  let fixture: ComponentFixture<PlayerWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerWindow],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerWindow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
