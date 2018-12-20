const MAPPING = {
  true: 'T',
  false: 'N'
}

export default class DDF {
  constructor (value) {
    this._value = value
  }

  toString () {
    return MAPPING[this._value] || 'U'
  }
}
