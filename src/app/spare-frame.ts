import {Frame} from './frame';
import {FrameContext} from './frame-context';

export class SpareFrame extends Frame {
  bonusRolls = [];

  constructor(context: FrameContext, rolls: number[]) {
    super(context);
    this.rolls = rolls;
  }

  public roll(pins: number): number {
    if (this.rolls.length === 2) {
      this.bonusRolls.push(pins);
      this.open = false;
    } else {
      this.rolls.push(pins);
      pins = null;
    }
    return pins;
  }

  public score(): number {
    if (this.open) {
      return 0;
    }

    let score = 0;
    for (const roll of this.rolls) {
      score += roll;
    }
    for (const bonus of this.bonusRolls) {
      score += bonus;
    }
    return score;
  }
}
