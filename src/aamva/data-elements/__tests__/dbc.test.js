import DBC from '../dbc'

describe('DBC', () => {
  describe('toString', () => {
    describe('when "1"', () => {
      it('works', () => {
        const dataElement = new DBC(1)

        expect(dataElement.toString()).toEqual('male')
      })
    })

    describe('when "2"', () => {
      it('works', () => {
        const dataElement = new DBC('2')

        expect(dataElement.toString()).toEqual('female')
      })
    })
  })
})
