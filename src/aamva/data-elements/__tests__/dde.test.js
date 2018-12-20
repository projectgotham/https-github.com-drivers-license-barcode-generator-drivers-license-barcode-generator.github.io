import DDE from '../dde'

describe('DDE', () => {
  describe('toString', () => {
    describe('when true', () => {
      it('works', () => {
        const dataElement = new DDE(true)

        expect(dataElement.toString()).toEqual('T')
      })
    })

    describe('when false', () => {
      it('works', () => {
        const dataElement = new DDE(false)

        expect(dataElement.toString()).toEqual('N')
      })
    })

    describe('when neither true or false', () => {
      it('works', () => {
        const dataElement = new DDE(null)

        expect(dataElement.toString()).toEqual('U')
      })
    })
  })
})
