import {Frame} from './frame';
import {FrameContext} from './frame-context';

export class StrikeFrame extends Frame {
  bonusRolls = [];

  constructor(context: FrameContext) {
    super(context);
    this.rolls.push(10);
  }

  public roll(pins: number): number {
    if (!this.open) {
      return pins;
    }

    this.bonusRolls.push(pins);
    if (this.bonusRolls.length === 2) {
      this.open = false;
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
