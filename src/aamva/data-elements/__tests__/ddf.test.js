import DDF from '../ddf'

describe('DDF', () => {
  describe('toString', () => {
    describe('when true', () => {
      it('works', () => {
        const dataElement = new DDF(true)

        expect(dataElement.toString()).toEqual('T')
      })
    })

    describe('when false', () => {
      it('works', () => {
        const dataElement = new DDF(false)

        expect(dataElement.toString()).toEqual('N')
      })
    })

    describe('when neither true or false', () => {
      it('works', () => {
        const dataElement = new DDF(null)

        expect(dataElement.toString()).toEqual('U')
      })
    })
  })
})
