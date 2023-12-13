function search() {
    let input = document.querySelector(`#search`);
    let domain = input.value

    //////////// COM SERV ///////////////////
    let url = `http://ip-api.com/line/${domain}`

    // 1. AJAX - prepare the request object
    let xhr = new XMLHttpRequest();

    // 2. settings
    xhr.open('GET', url);

    ///////////////////////////////////////////
    // event bindings
    xhr.onload = function () {
        // 4. get the response
        let data = xhr.responseText.split('\n')
        let country = data[1];
        let city = data[5];
        let timeZone = data[9];
        let lat = data[7];
        let lon = data[8];

        let resDiv = document.getElementById('result');
        resDiv.innerHTML = `            
            found it in: <br/>
            country: ${country} <br/>
            city: ${city} <br/>
            timezone: ${timeZone}
            <div id="map" style="opacity: 1; background-image: url(https://cache.ip-api.com/${lon},${lat},10)"></div>

            `
        console.log(data);
        input.value = ``
    }

    // 3. send the request
    xhr.send();
}
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}