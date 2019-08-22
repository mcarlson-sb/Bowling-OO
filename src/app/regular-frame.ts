import {SpareFrame} from './spare-frame';
import {StrikeFrame} from './strike-frame';
import {Frame} from './frame';

export class RegularFrame extends Frame {

  public roll(pins: number): number {
    if (!this.open) {
      return pins;
    }

    if (this.isStrike(pins)) {
      this.context.setState(new StrikeFrame(this.context));
      return null;
    }
    if (this.isSpare(pins)) {
      this.context.setState(new SpareFrame(this.context, this.rolls));
      this.context.roll(pins);
      return null;
    }

    this.rolls.push(pins);
    if (this.rolls.length === 2) {
      this.open = false;
    }
    return null;
  }

  private isStrike(pins: number) {
    return (this.rolls.length === 0 && pins === 10);
  }

  private isSpare(pins: number) {
    let total = 0;
    for ( const roll of this.rolls) {
      total += roll;
    }
    total += pins;
    return (total === 10);
  }

  public score(): number {
    if (this.open) {
      return 0;
    }

    let score = 0;
    for (const roll of this.rolls) {
        score += roll;
      }
    return score;
  }
}
