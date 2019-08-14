import { Injectable } from '@angular/core';
import {Frame} from './frame';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  frames: Frame[] = [];
  constructor() {
    this.frames.push(new Frame());
  }

  score() {
    let score = 0;
    for (const frame of this.frames) {
      if (frame.closed) {
        for (const roll of frame.rolls) {
          score += roll;
        }
      }
    }
    return score;
  }

  roll(pins: number) {
    for (const frame of this.frames) {
      if (!frame.closed) {
        frame.roll(pins);
      } else {
        const newFrame = new Frame();
        this.frames.push(newFrame);
      }
    }
  }
}
