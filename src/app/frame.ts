import {FrameFactory} from './frame-factory';

export class Frame {
  rolls = [];
  open = true;

  public roll(pins: number): [Frame, number] {
    const factory = new FrameFactory();
    return [factory.newFrame(pins), null];
  }

  public score(): number {
    return 0;
  }
}
