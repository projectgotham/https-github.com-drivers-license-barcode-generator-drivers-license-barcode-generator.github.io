import DBC from '../dbc'

describe('DBC', () => {
  describe('toString', () => {
    describe('when "U.S."', () => {
      it('works', () => {
        const dataElement = new DBC('U.S.')

        expect(dataElement.toString()).toEqual('USA')
      })
    })

    describe('when "Canada"', () => {
      it('works', () => {
        const dataElement = new DBC('Canada')

        expect(dataElement.toString()).toEqual('CAN')
      })
    })
  })
})
