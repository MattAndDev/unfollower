import { configs } from './common'
import replace from '@rollup/plugin-replace'

export default configs.map((config) => ({
  ...config,
  plugins: [
    ...config.plugins,
    replace({
      __DEBUG__: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true,
    }),
  ],
}))
