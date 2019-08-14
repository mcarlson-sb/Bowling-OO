import {Frame} from './frame';
import {SpareFrame} from './spare-frame';

export class RegularFrame extends Frame {

  constructor(pins: number) {
    super();
    this.rolls.push(pins);
  }

  public roll(pins: number): [Frame, number] {
    if (this.isSpare(pins)) {
      return [new SpareFrame(this.rolls, pins), null];
    }

    this.rolls.push(pins);
    this.closed = true;
    return [this, null];
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
    let score = 0;
    if (this.closed) {
      for (const roll of this.rolls) {
        score += roll;
      }
    }
    return score;
  }
}
