import truncator from '../utils/truncator'

export default class DAC {
  constructor(value) {
    this._value = value;
  }

  toString() {
    return truncator(this._value, 40);
  }
}
