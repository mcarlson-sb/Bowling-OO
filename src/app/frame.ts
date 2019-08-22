import {FrameContext} from './frame-context';

export abstract class Frame {
  rolls = [];
  open = true;

  protected context: FrameContext;
  constructor(context: FrameContext) {
    this.context = context;
  }

  public abstract roll(pins: number): number ;

  public abstract score(): number;
}
