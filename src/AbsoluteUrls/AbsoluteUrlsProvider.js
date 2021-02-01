import React from 'react'
import { AbsoluteUrls } from './AbsoluteUrls'

export const AbsoluteUrlsProvider = props => {
  if (!customElements.get('absolute-urls')) {
    customElements.define('absolute-urls', AbsoluteUrls)
  }
  return (
    <absolute-urls data-base-path={props.basePath}>
      {props.children}
    </absolute-urls>
  )
}
