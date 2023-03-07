import { FunctionalComponent } from 'preact'
import { JSXInternal } from 'preact/src/jsx'

import styles from './button.css'

export const Button: FunctionalComponent<
  JSXInternal.HTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => (
  <button className={styles.wrap} {...rest}>
    {children}
  </button>
)
