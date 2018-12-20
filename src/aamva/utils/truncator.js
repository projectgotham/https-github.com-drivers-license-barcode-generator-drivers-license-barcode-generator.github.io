import { truncate } from 'lodash'

export default (value, length) => {
  return truncate(value, {
    length,
    omission: ''
  })
}
