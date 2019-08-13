import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });

  it( 'should get a score of 0 from a new game', () => {
    const game: GameService = TestBed.get(GameService);
    expect(game.score()).toBe(0);
  });
});
