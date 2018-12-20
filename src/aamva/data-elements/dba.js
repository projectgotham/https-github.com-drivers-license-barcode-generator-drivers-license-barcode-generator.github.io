import truncator from '../utils/truncator'
import typer from '../utils/typer'

export default class DBA {
  // TODO: Add Date Format Validation

  constructor(value) {
    this._value = typer(value, 'ANS');
  }

  toString() {
    return truncator(this._value, 8);
  }
}
