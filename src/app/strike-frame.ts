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
      this.open = false;
    }
    return [this, pins];
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
