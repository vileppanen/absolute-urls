export const createCssAttributesSelector = (attributes = []) => {
  const selector = attributes.reduce((selector, attr) => `${selector}*[${attr}],`, '')
  return selector.replace(/,$/, '')
}
