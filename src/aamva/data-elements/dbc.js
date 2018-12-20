const MAPPING = {
  1: 'male',
  2: 'female'
}

export default class DBC {
  constructor(value) {
    this._value = value;
  }

  toString() {
    return MAPPING[this._value]; // TODO Throw if not found in mapping
  }
}
