import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import image from '@rollup/plugin-image'
import copy from 'rollup-plugin-copy'
import commonjs from '@rollup/plugin-commonjs'

const opts = [
  { name: 'script', ext: 'ts', format: 'iife' },
  // { name: 'worker', ext: 'ts', format: 'es' },
  { name: 'popup', ext: 'tsx', format: 'es' },
]

export const configs = opts.map(({ name, format, ext }) => {
  return {
    input: `source/${name}/${name}.${ext}`,
    output: {
      file: `build/${name}.js`,
      format,
    },
    plugins: [
      commonjs(),
      postcss({
        extract: `${name}.css`,
        modules: true,
      }),
      typescript(),
      json(),
      image(),
      resolve({ browser: true }),
      copy({
        targets: [
          { src: 'source/manifest.json', dest: 'build' },
          { src: 'source/popup/popup.html', dest: 'build' },
          { src: 'source/assets/**/*', dest: 'build/assets' },
        ],
      }),
    ],
  }
})
