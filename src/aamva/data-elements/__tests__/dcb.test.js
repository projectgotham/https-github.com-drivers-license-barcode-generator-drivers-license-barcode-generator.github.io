import DCB from '../dcb'

describe('DCB', () => {
  describe('toString', () => {
    describe('when the value to too long', () => {
      it('truncates correctly', () => {
        const dataElement = new DCB('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ')

        expect(dataElement.toString()).toEqual('ABCDEFGHIJKL')
      })
    })
  })
})
