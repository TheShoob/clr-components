import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';


export const config: Config = {

  namespace: 'clear-components',
  commonjs: {
    namedExports: {
        'node_modules/hammerjs': ['hammer.min.js'],
    }
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
  ],
  
  plugins: [
    sass(), inlineSvg()
  ],


};
