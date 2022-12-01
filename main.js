const btn = document.getElementById('get-res');
const residents = document.getElementById('residents');

const baseURL = 'https://swapi.dev/api';

let nameTitles = ``;

function getResidents() {
    axios.get(`${baseURL}/planets/?search=alderaan`).then((res) => {
        getResName(res.data.results[0].residents);

    });

}

function getResName(residents) {
    residents.forEach(url => {
        axios.get(url).then((res) => {
            let name = `
            <h1>${res.data.name}</h1>
           `;
            nameTitles += name;
        });
    });
}

function displayNames() {
    residents.innerHTML = nameTitles;
}

btn.addEventListener('click', getResidents);