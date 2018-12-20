import DAC from '../dac'

describe('DAC', () => {
  describe('toString', () => {
    describe('when the value to too long', () => {
      it('truncates correctly', () => {
        const dataElement = new DAC('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ')

        expect(dataElement.toString()).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN')
      })
    })
  })
})
