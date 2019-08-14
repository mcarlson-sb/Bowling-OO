import {Frame} from './frame';

export class StrikeFrame extends Frame {
  bonusRolls = [];

  constructor() {
    super();
    this.rolls.push(10);
  }

  public roll(pins: number): [Frame, number] {
    this.bonusRolls.push(pins);
    if (this.bonusRolls.length === 2) {
      this.closed = true;
    }
    return [this, pins];
  }

  public score(): number {
    let score = 0;
    if (this.closed) {
      for (const roll of this.rolls) {
        score += roll;
      }
      for (const bonus of this.bonusRolls) {
        score += bonus;
      }
    }
    return score;
  }
}
