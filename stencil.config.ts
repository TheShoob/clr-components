import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';


export const config: Config = {

  namespace: 'clear-components',
  commonjs: {
    namedExports: {
        'node_modules/hammerjs': ['hammer.min.js']
    }
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
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
    sass(),
  ]
  
};
