import {Injectable} from '@angular/core';
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
      score += frame.score();
    }
    return score;
  }

  roll(pins: number) {
    const remainingPins = this.updateFrames(pins);
    if (remainingPins) {
      this.addNewFrame(remainingPins);
    }
  }

  private updateFrames(pins: number): number {
    for (let framesIndex = 0; framesIndex < this.frames.length; framesIndex++) {
      const frame = this.frames[framesIndex];
      if (frame.open && pins) {
        [this.frames[framesIndex], pins] = frame.roll(pins);
      }
    }
    return pins;
  }

  private addNewFrame(remainingPins: number) {
    let newFrame = new Frame();
    [newFrame] = newFrame.roll(remainingPins);
    this.frames.push(newFrame);
  }
}
