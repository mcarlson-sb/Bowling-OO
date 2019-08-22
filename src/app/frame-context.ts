import {Frame} from './frame';
import {RegularFrame} from './regular-frame';
import {StrikeFrame} from './strike-frame';
import {SpareFrame} from './spare-frame';

export class FrameContext {
  private currentState: Frame;

  constructor() {
    this.currentState = new RegularFrame(this);
  }

  public setState(frameState: Frame) {
    this.currentState = frameState;
  }

  public roll(pins: number): number {
    return this.currentState.roll(pins);
  }

  public score(): number {
    return this.currentState.score();
  }

  public isOpen(): boolean {
    return this.currentState.open;
  }
}
