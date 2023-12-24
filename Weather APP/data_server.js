let input = document.querySelector(`#search`);
let resDiv = document.getElementById('result');

function renderWeather() {    
    let city = input.value
    let xhr = new XMLHttpRequest();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8875bcf7f488e45a29af50a518befe7&units=metric`
    
    xhr.open(
        'GET', url);
    
    xhr.send();
    
    xhr.onload = () => {
        let response = xhr.responseText;
        let data = JSON.parse(response);
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
    }  
}

function displayError(message) {
    resDiv.innerHTML = `<h2 id="error" style="color: red; text-align: center">${message}</h2>`;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        renderWeather();
    }
}

