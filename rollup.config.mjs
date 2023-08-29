import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

export default {
  input: 'index.mjs',
  plugins: [
    resolve(),
		commonjs(),
    json(),
    copy({
      targets: [
        {src: 'icon.png', dest: 'dist'},
        {src: 'info.plist', dest: 'dist'},
        {src: 'prefs.plist', dest: 'dist'},
      ]
    })
  ],
  output: {
    format: 'cjs',
    file: 'dist/index.js',
  }
}