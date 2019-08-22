import {Frame} from './frame';
import {FrameContext} from './frame-context';

export class SpareFrame extends Frame {
  bonusRolls = [];

  constructor(context: FrameContext, rolls: number[]) {
    super(context);
    this.rolls = rolls;
  }

  public roll(pins: number): number {
    if (!this.open) {
      return pins;
    }

    if (this.isBonusRoll()) {
      this.bonusRolls.push(pins);
      this.open = false;
      return pins;
    }

    this.rolls.push(pins);
    return null;
  }

  private isBonusRoll() {
    return this.rolls.length === 2;
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
