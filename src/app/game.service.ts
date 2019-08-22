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
    if (this.frames.length === 0) {
      const context = new FrameContext();
      this.frames.push(context);
      context.roll(pins);
      pins = null;
    } else {
      for ( const frame of this.frames ) {
        if (frame.isOpen() && pins !== null) {
          pins = frame.roll(pins);
        }
      }
    }
    return pins;
  }

  private addNewFrame(remainingPins: number) {
    const newFrame = new FrameContext();
    newFrame.roll(remainingPins);
    this.frames.push(newFrame);
  }
}
