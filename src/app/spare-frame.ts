import {Frame} from './frame';

export class SpareFrame extends Frame {
  bonusRolls = [];

  constructor(rolls: any[], pins: number) {
    super();
    this.rolls = rolls;
    this.rolls.push(pins);
  }

  public roll(pins: number): [Frame, number] {
    this.bonusRolls.push(pins);
    this.closed = true;
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
