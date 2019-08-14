import {StrikeFrame} from './strike-frame';
import {RegularFrame} from './regular-frame';
import {Frame} from './frame';

export class FrameFactory {

  newFrame(pins: number): Frame {
    if (pins === 10) {
      return new StrikeFrame();
    } else {
      return new RegularFrame(pins);
    }
  }
}

