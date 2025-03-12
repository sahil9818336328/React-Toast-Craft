// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.js', // Input JavaScript file
    output: [
      {
        file: packageJson.main, // Output for CommonJS
        format: 'cjs',
        sourcemap: true,
        exports: 'named', // Ensures named exports work
      },
      {
        file: packageJson.module, // Output for ES modules
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(), // Externalize peer dependencies (e.g. react, react-dom)
      resolve({
        extensions: ['.js', '.jsx'], // Allow .jsx extensions
      }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-react'], // Use the preset-react for JSX
        exclude: 'node_modules/**', // Don't transpile node_modules
      }),
      terser(),
      postcss({
        extract: false, // This will inject styles into the JS bundle itself
      }),
    ],
    external: ['react', 'react-dom'], // Keep react and react-dom external
  },
]
