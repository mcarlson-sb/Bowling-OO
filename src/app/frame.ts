export class Frame {
  rolls = [];
  closed = false;

  public roll(pins: number) {
    this.rolls.push(pins);
    if (this.rolls.length === 2) {
      this.closed = true;
    }
  }
}
