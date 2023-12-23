const form = document.querySelector('#form-name');
const input = form.children[2].firstElementChild;
const output = form.children[3];

form.addEventListener('submit', (e) => {
    e.preventDefault();    
    console.log(e);

    const name = processName(input.value);

    if (name) {
        fetchData(name);
    } else {
        displayError("Input your name please!");
    }
});

function processName(name) {
    if (name.includes(' ')) {
        return name.replace(/ /g, '');
    }
    return name.trim();
}

function displayError(message) {
    output.innerHTML = `<p id="error" style="color: red;">${message}</p>`;
}

function fetchData(name) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', `https://api.nationalize.io/?name=${name}`);
    xhr.send();

    xhr.onloadend = () => {
    const response = xhr.responseText;
    const data = JSON.parse(response);

    if (data.country && data.country.length > 0) {
        const nationality = data.country[0].country_id;

        const matchedCountry = list.find(country => country.code === nationality);

        if (matchedCountry) {
            displayNationality(matchedCountry.name);
        } else {
            displayError("Unable to determine nationality. Please try another name.");
        }
    } else {
        displayError("Unable to determine nationality. Please try another name.");
    }
};
}

function displayNationality(nationality) {
    output.innerHTML = `Name ${input.value} are most probably from <strong>${nationality}</strong>`;
    input.value = ``;
}
