import { rollup } from 'rollup';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';

var pkg = require('./package.json');

export default {
  entry: 'index.js',
  moduleName: 'Bad',
  format: 'umd',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: false,
      browser: false,
      extensions: [ '.js', '.json' ]
    }),
    json()
  ],
  dest: 'built/index.js'
}