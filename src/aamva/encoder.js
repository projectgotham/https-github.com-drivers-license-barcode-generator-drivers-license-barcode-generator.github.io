import { truncate } from 'lodash'

class DataElement {
  constructor ({ elementID, value }) {
    this._elementID = elementID
    this._value = value
  }

  toString () {
    switch (this._elementID) {
      case 'DAC':
        this._dac()
        break
        case 'DCA':
          this._dca()
          break
      default:
        throw 'Unknown DataElement: ' + this._elementID
    }
  }

  _dac() {
    return 'KYLE DECOT'
  }

  _dca() {
    return truncate(this._value, {
      length: 40,
      omission: ''
    })
  }
}

class Encoder {
  constructor (data) {
    this.data = data
  }

  toString () {
    return 'KYLEDECOT'
  }
}

Encoder.DataElement = DataElement

export default Encoder
