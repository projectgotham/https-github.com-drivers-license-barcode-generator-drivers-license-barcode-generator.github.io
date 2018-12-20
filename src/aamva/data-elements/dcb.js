import truncator from '../utils/truncator'
import typer from '../utils/typer'

export default class DCB {
  constructor(value) {
    this._value = typer(value, 'ANS');
  }

  toString() {
    return truncator(this._value, 12);
  }
}
