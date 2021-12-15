import type { UserConfig } from 'vite';
const { resolve } = require('path')

const config: UserConfig = {
    publicDir: 'public',

    build: {
        rollupOptions: {
          // https://rollupjs.org/guide/en/#big-list-of-options
          input: {
            main: resolve(__dirname, 'index.html'),
          }
        }
    }
}

export default config;