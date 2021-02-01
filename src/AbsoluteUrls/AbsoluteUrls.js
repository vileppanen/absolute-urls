import { createCssAttributesSelector } from '../utils/createCssAttributesSelector'

const resolveAbsoluteAttrValues = (node, basePath, attrs = []) => {
  attrs.forEach(attr => {
    const srcValue = node.getAttribute(attr) || ''

    if (srcValue.startsWith('/') || srcValue.startsWith('./') || srcValue.startsWith('../')) {
      const absolutionedUrl = new URL(srcValue, basePath)
      node.setAttribute(attr, absolutionedUrl)
    } else {
      console.warn('Skipping absolutioning of attr ', attr, ' with value ', srcValue)
    }
  })
}

const absolutionizeChildrenAttrs = (parent, attrs = []) => {
  try {
    const basePath = parent.getAttribute('data-base-path')
    if (!basePath || basePath.length <= 0) throw new Error('Base path not defined')

    const attrSelector = createCssAttributesSelector(attrs)
    const nodes = parent.querySelectorAll(attrSelector)

    nodes.forEach(node => resolveAbsoluteAttrValues(node, basePath, attrs))
  } catch (err) {
    console.error('Could not absolutionize attribute values', err)
  }
}

export class AbsoluteUrls extends HTMLElement {
  constructor () {
    super()
    const domContentLoadedListener = (event) => {
      absolutionizeChildrenAttrs(this, ['src', 'href', 'action'])
      window.removeEventListener('DOMContentLoaded', domContentLoadedListener)
    }
    window.addEventListener('DOMContentLoaded', domContentLoadedListener)
  }
}
