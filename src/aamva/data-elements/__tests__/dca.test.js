import DCA from '../dca'

describe('DCA', () => {
  describe('toString', () => {
    it('works', () => {
      const dataElement = new DCA('ABCDEFG')

      expect(dataElement.toString()).toEqual('ABCDEF')
    });
  })
});
