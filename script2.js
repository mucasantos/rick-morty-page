const API_URL_PAGE = 'https://rickandmortyapi.com/api/character/?page='

let endereco = "https://rickandmortyapi.com/api/character/"

const image = document.getElementById("image")
const namePersona = document.getElementById("name")
const place = document.getElementById("place")

const main = document.getElementById("main")

getCharacters(API_URL_PAGE)

function getCharacters() {

    const num = Math.floor(Math.random() * 43);
    console.log(API_URL_PAGE + num)
    fetch(API_URL_PAGE + num).then(
        resposta => {
            return resposta.json();
        }
    ).then(
        data => {
            showCharacters(data.results)
        }
    )

}

function showCharacters(characters) {
    main.innerHTML = ''

    characters.forEach(character => {

        const { name, status, species, gender, image, } = character;

        const characterElement = document.createElement('div')
        characterElement.classList.add('card')

        characterElement.innerHTML = `
    
        <img src ="${image}" id = "image" alt="">
        <div class="card-info">
          <h3>${name}</h3>
          <div class="information">
            <h3>Information</h3>
            <p>STATUS: ${status}</p>
            <p>SPECIES:  ${species}</p>
            <p>GENDER: ${gender}</p>       
          </div>
          </p>
        </div>
          `
        main.appendChild(characterElement)

    });
}