import DCG from '../dcg'

describe('DCG', () => {
  describe('toString', () => {
    describe('when "U.S."', () => {
      it('works', () => {
        const dataElement = new DCG('U.S.')

        expect(dataElement.toString()).toEqual('USA')
      })
    })

    describe('when "Canada"', () => {
      it('works', () => {
        const dataElement = new DCG('Canada')

        expect(dataElement.toString()).toEqual('CAN')
      })
    })
  })
})
