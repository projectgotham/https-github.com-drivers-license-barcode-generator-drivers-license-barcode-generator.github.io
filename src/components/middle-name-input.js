import React from 'react'
import PropTypes from 'prop-types'
import NameInput from './name-input'

const MiddleNameInput = ({ onChange, testid }) => (
  <NameInput label={'Middle Name'} testid={testid} onChange={onChange} />
)

MiddleNameInput.propTypes = {
  onChange: PropTypes.func,
  testid: PropTypes.string.isRequired
}

export default MiddleNameInput
