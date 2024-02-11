export function jokes(getjoke, showjoke) {
    async function getData() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            showjoke.innerHTML = data.value;
        } catch (error) {
            console.error('Virhe:', error);
        }
    }

    getjoke.addEventListener('click', () => getData()); 
    getData(); 
}