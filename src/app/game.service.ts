import {Injectable} from '@angular/core';
import {FrameContext} from './frame-context';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  frames: FrameContext[] = [];

  constructor() {
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
    if (remainingPins !== null) {
      this.addNewFrame(remainingPins);
    }
  }

  private updateFrames(pins: number): number {
    if (this.isFirstFrame()) {
      this.addNewFrame(pins);
      return null;
    }

    return this.applyPinsToFrames(pins);
  }

  private applyPinsToFrames(pins: number) {
    for (const frame of this.frames) {
      if (pins !== null) {
        pins = frame.roll(pins);
      }
    }
    return pins;
  }

  private isFirstFrame() {
    return this.frames.length === 0;
  }

  private addNewFrame(pins: number) {
    const newFrame = new FrameContext();
    newFrame.roll(pins);
    this.frames.push(newFrame);
  }
}
