import { FunctionalComponent } from 'preact'
import { JSXInternal } from 'preact/src/jsx'

import styles from './text.css'

export const Text: FunctionalComponent<
  JSXInternal.HTMLAttributes<HTMLParagraphElement>
> = ({ children, ...rest }) => (
  <p className={styles.wrap} {...rest}>
    {children}
  </p>
)
