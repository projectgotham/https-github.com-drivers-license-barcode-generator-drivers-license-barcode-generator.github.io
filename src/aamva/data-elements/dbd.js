import truncator from '../utils/truncator'
import typer from '../utils/typer'

export default class DBD {
  // TODO: Add Date Format Validation

  constructor(value) {
    this._value = typer(value, 'F8N');
  }

  toString() {
    return truncator(this._value, 8);
  }
}
