import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  let game: GameService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    game = TestBed.get(GameService);
  });

  it('should be created', () => {
    expect(game).toBeTruthy();
  });

  it( 'should get a score of 0 from a new game', () => {
    expect(game.score()).toBe(0);
  });

  it( 'should get a score of 0 from an open frame', () => {
    game.roll(2);
    expect(game.score()).toBe(0);
  });

  it( 'should get a score of 8 from a regular frame, rolls 2,6', () => {
    game.roll(2);
    game.roll(6);
    expect(game.score()).toBe(8);
  });

  it( 'should score 5 from rolls 2,3,4', () => {
    game.roll(2);
    game.roll(3);
    game.roll(4);
    expect(game.score()).toBe(5);
  });

  it( 'should score 14 from two closed frames rolls 2,3,4,5', () => {
    game.roll(2);
    game.roll(3);
    game.roll(4);
    game.roll(5);
    expect(game.score()).toBe(14);
  });

  it( 'should score a spare as open', () => {
    game.roll(8);
    game.roll(2);
    expect(game.score()).toBe(0);
  });

  it( 'should score a closed spare, roll 8,2,1', () => {
    game.roll(8);
    game.roll(2);
    game.roll(1);
    expect(game.score()).toBe(11);
  });

  it( 'should score a closed spare and closed regular, roll 8,2,1,4', () => {
    game.roll(8);
    game.roll(2);
    game.roll(1);
    game.roll(4);
    expect(game.score()).toBe(16);
  });

  it( 'should score an open strike', () => {
    game.roll(10);
    game.roll(1);
    expect(game.score()).toBe(0);
  });

  it( 'should score a closed strike', () => {
    game.roll(10);
    game.roll(1);
    game.roll(2);
    expect(game.score()).toBe(16);
  });

  it( 'should score correctly with a gutter ball', () => {
    game.roll(9);
    game.roll(0);
    game.roll(1);
    game.roll(2);
    expect(game.score()).toBe(12);
  });

  it( 'should score a full game correctly', () => {
    game.roll(10);
    expect(game.score()).toBe(0);
    game.roll(9);
    expect(game.score()).toBe(0);
    game.roll(1);
    expect(game.score()).toBe(20);
    game.roll(5);
    expect(game.score()).toBe(35);
    game.roll(5);
    expect(game.score()).toBe(35);
    game.roll(7);
    expect(game.score()).toBe(52);
    game.roll(2);
    expect(game.score()).toBe(61);
    game.roll(10);
    expect(game.score()).toBe(61);
    game.roll(10);
    expect(game.score()).toBe(61);
    game.roll(10);
    expect(game.score()).toBe(91);
    game.roll(9);
    expect(game.score()).toBe(120);
    game.roll(0);
    expect(game.score()).toBe(148);
    game.roll(8);
    expect(game.score()).toBe(148);
    game.roll(2);
    expect(game.score()).toBe(148);
    game.roll(9);
    expect(game.score()).toBe(167);
    game.roll(1);
    expect(game.score()).toBe(167);
    game.roll(10);
    expect(game.score()).toBe(187);
  });

});
