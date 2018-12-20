const MAPPING = {
  true: 'T',
  false: 'N'
}

export default class DDE {
  constructor (value) {
    this._value = value
  }

  toString () {
    return MAPPING[this._value] || 'U'
  }
}
