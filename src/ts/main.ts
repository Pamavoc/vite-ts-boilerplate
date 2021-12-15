import '../scss/main.scss'

import vertexShader from '../shaders/vertex.vert?raw'
import fragmentShader from '../shaders/fragment.frag?raw'


const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
