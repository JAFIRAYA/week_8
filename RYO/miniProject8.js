let cityData = [];

let btn1= document.getElementById("btn")

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    let city = document.getElementById('INP').value;
    getCityWeather(city);
    document.getElementById('INP').value = '';
    
})

function getCityWeather(city){
    if(city ===""){
        alert("veuillez saisir une pays")
        city.focus()
        return false   
    }
    let xhr = new XMLHttpRequest();
    xhr.responseType="json"
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status != 200) { 
          alert(`Error ${xhr.status}: ${xhr.statusText}`); 
        } else { 

          let weather = xhr.response
          let cityName=weather.name
          let temperature=weather.main.temp
          let humidity = weather.main.humidity
          let descrip=weather.weather[0].description
          let icon = weather.weather[0].icon

         
          const card = document.createElement('div');
          card.className = 'card';
          const Name = document.createElement('h2');
          Name.textContent = cityName

          const image = document.createElement('img');
          image.src = `https://openweathermap.org/img/wn/${icon}.png`

          const temperatureHtml = document.createElement('p');
          temperatureHtml.textContent = temperature;
          const humidityHtml = document.createElement('p');
          humidityHtml.textContent = humidity;
          const weatherHtml = document.createElement('p');
          weatherHtml.textContent = descrip;

          card.appendChild(Name);
          card.appendChild(weatherHtml);
          card.appendChild(image)
          card.appendChild(temperatureHtml);
          card.appendChild(humidityHtml);
          let allcard=document.getElementById('cards')
          allcard.appendChild(card)
        }
      };
      xhr.onerror = function() {
        alert("Request failed");
      };
}







