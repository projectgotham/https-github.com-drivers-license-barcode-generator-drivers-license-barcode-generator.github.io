import { truncate } from 'lodash'

export default class DCA {
  constructor(value) {
    this._value = value;
  }

  toString() {
    return truncate(this._value, {
      length: 6,
      omission: '',
    })
  }
}
