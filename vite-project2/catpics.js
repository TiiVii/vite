export function showPics(element) {
    // versio 1, haetaan kissakuvat json tiedostosta
    // ja muokataan index.html tietoja
    async function modifyHTMLPics() {
      console.log('Haetaan kuvat paikallisesta JSON tiedostosta!');
  
      try {
        // fetch
        const response = await fetch('catpics.json');
        if (!response.ok) throw new Error('Huono haku!!');
        const images = await response.json();

        const randomIndex = Math.floor(Math.random() * images.length);
        console.log(randomIndex)
  
        console.log(images);
        const alt = images[randomIndex].name;
        const figurecap = images[randomIndex].description;
        const imagesrc = images[randomIndex].address;
  
        // haetaan kuvaelementti html tiedostosta
        const kuva = document.querySelector('figure img');
        kuva.src = imagesrc;
        kuva.alt = alt;
  
        // haetaan kuvateksti html tiedostosta
        const kuvateksti = document.querySelector('figure figcaption');
        kuvateksti.innerText = figurecap;
      } catch (error) {
        console.log(error);
      }
    }
    console.log(element);
    if (element) {
      // Add event listener only if the element exists
      element.addEventListener('click', () => 
      modifyHTMLPics());
    };

}