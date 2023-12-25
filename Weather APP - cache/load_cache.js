let input = document.querySelector(`#search`);
let resDiv = document.getElementById('result');

const saveDataToCache = (key, data, ttl = 3600) => {
    const currentTime = new Date().getTime();
    const cacheData = {
        timestamp: currentTime,
        data: data
    };
    localStorage.setItem(key, JSON.stringify(cacheData));
    // Adăugați verificarea timpului de viață (TTL)
    localStorage.setItem(`${key}_ttl`, currentTime + ttl * 1000); // timpul de expirare în milisecunde
};

const loadDataFromAPI = (city, cb) => {
    let xhr = new XMLHttpRequest();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8875bcf7f488e45a29af50a518befe7&units=metric`;

    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        let data = JSON.parse(xhr.responseText);
        saveDataToCache(city, data); // Salvăm datele în cache folosind numele orașului drept cheie
        cb(data);
    };
};

const load = (cb) => {
    let city = input.value;
    let data = loadDataFromCache(city); // Încercăm să obținem datele din cache folosind numele orașului ca și cheie
    if (data) {
        cb(data); // Apelez callback-ul cu datele din cache, dacă există
    } else {
        loadDataFromAPI(city, (apiData) => {
            cb(apiData); // Apelez callback-ul cu datele primite de la API
        });
    }
};

const loadDataFromCache = (key) => {
    const data = localStorage.getItem(key);
    const ttl = localStorage.getItem(`${key}_ttl`);
    const currentTime = new Date().getTime();

    if (data && ttl && currentTime < parseInt(ttl)) {
        return JSON.parse(data).data; // Returnez doar datele, nu întregul obiect cacheData
    } else {
        // Elimin datele expirate din cache
        localStorage.removeItem(key);
        localStorage.removeItem(`${key}_ttl`);
        return null;
    }
};

const render = (data) => {
    console.log(data); 

    let cod = data.cod
                
    if (cod === 200) {
        let city = data.name;
        let ico = data.weather[0].icon;
        let description = data.weather[0].description;
        let temp = Math.round(data.main.temp);
        let feelTemp = Math.round(data.main.feels_like);
        let windSpeed = Math.round(data.wind.speed);
        let humidity = data.main.humidity;
        resDiv.innerHTML = `            
            <div class="text-center">
                <h1>${city}</h1>
                <div style="width: 140px; height: 140px; background-image: url(https://openweathermap.org/img/wn/${ico}@2x.png); background-position: center; background-repeat: no-repeat; background-size: 140%; margin: auto"></div>
                <h3 style="">${description}</h3>                            
                <h1 style="font-size: 2em;">${temp}°</h1>
                <h3 style="">Feels like ${feelTemp}°</h3>
            </div>
            <div class="container text-center mt-6 pt-6">
                <div class="row">
                    <div class="col">
                        <i class="bi bi-wind text-info fs-4"></i> ${windSpeed} m/s                   
                    </div>
                    <div class="col">
                        <i class="bi bi-moisture text-info fs-4"></i> ${humidity}%
                    </div>
                </div>
            </div>
    
            `                
    } else if(cod != 200 ) {
        resDiv.innerHTML = ``
        displayError("Unable to search place.<br/> Please try again.")  
    }
};

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        load(render);
    }
}

function displayError(message) {
    resDiv.innerHTML = `<h2 id="error" style="color: red; text-align: center">${message}</h2>`;
}