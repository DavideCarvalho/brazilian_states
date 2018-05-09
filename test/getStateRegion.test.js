import { expect } from 'chai';
import { getStateRegion } from '../src/api/estados';

describe('getStateRegion', () => {
  it('should return right region for São Paulo', () => {
    const regionFromSaoPaulo = getStateRegion({ state: 'São Paulo' });
    expect(regionFromSaoPaulo.regionName).to.be.equal('Sudeste');
  });
  it('should return right region for sao paulo', () => {
    const regionFromSaoPaulo = getStateRegion({ state: 'sao paulo' });
    expect(regionFromSaoPaulo.regionName).to.be.equal('Sudeste');
  });
  it('should throw if state property is not given', () => {
    expect(() => getStateRegion({ random: 'property' })).to.throw();
  });
  it('should throw if is passed an empty json', () => {
    expect(() => getStateRegion({})).to.throw();
  });
  it('should throw if nothing is passed to the function', () => {
    expect(() => getStateRegion()).to.throw();
  });
});
