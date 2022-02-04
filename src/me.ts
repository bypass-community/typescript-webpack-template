export class Me {
  constructor(private _firstNmae: string, private _lastName: string) {}

  public say(elem: HTMLElement | null): void {
    if (elem) {
      elem.innerHTML = 'Hello：' + this._firstNmae + this._lastName + '!'
    }
  }
}
