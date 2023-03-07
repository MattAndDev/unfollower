import { configs } from './common'
import terser from '@rollup/plugin-terser'
import replace from '@rollup/plugin-replace'

export default configs.map((config) => ({
  ...config,
  plugins: [
    ...config.plugins,
    replace({
      __DEBUG__: false,
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    terser({ format: { comments: false } }),
  ],
}))
