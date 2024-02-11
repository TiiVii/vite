import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { jokes } from './jokes.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <h3>TEHTÄVÄ</h3>
    <h3>1. Fetch API GET request - Vitsi API rajapinnasta</h3>
    <p class="read-the-docs">
      Get your Chuck Norris joke of the day!
    </p>

      <h1 id="show_joke"></h1>

<button id="chuck">Hae vitsi</button>
  </div>
`


setupCounter(document.querySelector('#counter'))

const getjoke = document.getElementById('chuck'); 
const showjoke = document.getElementById('show_joke'); 
jokes(getjoke, showjoke);