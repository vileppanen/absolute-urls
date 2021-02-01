import { createCssAttributesSelector } from './createCssAttributesSelector'

describe('utils module', () => {
  it('should create css attribute selector out of provided attributes array', () => {
    const attributesArray = ['src', 'href', 'action']
    const results = createCssAttributesSelector(attributesArray)
    expect(results).toEqual('*[src],*[href],*[action]')
  })
})
