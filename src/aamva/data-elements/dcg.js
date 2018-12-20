const MAPPING = {
  'U.S.': 'USA',
  'Canada': 'CAN'
}

export default class DCS {
  constructor (value) {
    this._value = value
  }

  toString () {
    // TODO: Raise if it's something not in the mapping
    return MAPPING[this._value]
  }
}
