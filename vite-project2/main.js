import './style.css';
import { showPics } from './catpics.js';
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

<h3>Tehtävä 2 - Kissakuvat</h3>

    <figure>
      <img src="http://placekitten.com/300/200" alt="Kissakuva" />
      <figcaption>Tähän tulee kissakuvan tiedot</figcaption>
    </figure>

    <button src="catpics.js" class="pics">Hae kissakuvat</button>

    <h3>3. Flexboxilla tehty kortti - Staattinen tieto</h3>

<section class="card-area">
  <!-- yksittäinen kortti -->
  <div class="card">
    <!-- vasen puoli jossa kuva -->
    <div class="card-img" id="trigger">
      <img src="gym.jpeg" width="136" alt="Gym" />
    </div>

    <!-- oikea puoli jossa päiväkirjamerkintä-->
    <div class="card-diary">
      <!-- tänne myös flexbox rakenne -->
      <div class="card-img" id="trigger">
      <img src="diary.jpeg" alt="diary" />
    </div>
    </div>
  </div>
</section>

  </div>
`


setupCounter(document.querySelector('#counter'));

const getjoke = document.getElementById('chuck'); 
const showjoke = document.getElementById('show_joke'); 
jokes(getjoke, showjoke);

showPics(document.querySelector('.pics'));

// tehtävä 4
//showDiary(document.querySelector('.diary-area'));
