export class GaugeSetting {
  public startRange: number;
  public endRange: number;
  public color: string;

  constructor(startRange: number, endRange: number, color: string) {
    this.startRange = startRange;
    this.endRange = endRange;
    this.color = color;
  }
}
