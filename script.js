// Select the HTML element with class 'forecast-container'
var daysElement = document.querySelector('.forecast-container'); 
console.log(daysElement);

// OpenWeatherMap API key
const apiKey ='246778bea7563c3c26ec7a6a780eba81';

// Event listener for the button with id 'search'
document.getElementById('search').onclick = 
function(){
    // Get the city name from the input field with id 'city'
    const city = document.getElementById('city').value;

    // Construct the API URL for OpenWeatherMap
    const url =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

    // Fetch weather data from the OpenWeatherMap API
    fetch(url).then(res=>res.json()).then(data => {console.log(data);
    
    
    var currentDate = new Date();    
    currentDate = currentDate.toLocaleString().substring(0, 10);

    // Display current weather information
document.getElementById('current').innerHTML=`
<h3>${city}</h3>
<p>${data.list[0].dt_txt}</p>
<li>Humidity: ${data.list[0].main.humidity}</li>
<li>Temp: ${data.list[0].main.temp}</li>
<li>Wind Speed: ${data.list[0].wind.speed}</li>
`
 // Set font size for current weather information
document.getElementById('current').style.fontSize = '24px';

// Filter the list to get data for 12:00:00 (noon) for the next 5 days

var fiveDayArray = data.list.filter((item) => item.dt_txt.includes('12:00:00'));
let daysCard = ''; 


// Iterate through the filtered array to create cards for each day
for (var i = 0; i < fiveDayArray.length; i++) {
    var timeStamp = fiveDayArray[i].dt * 1000;
    var date = new Date(timeStamp) .toLocaleDateString();
    var icon = fiveDayArray[i].weather[0].icon;
    var iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
    
    // Construct HTML for each day's weather card
    
    daysCard += `
    <div>
        <p>${date}</p>
        <img src="${iconUrl}" alt="weather icon">
        <ul>
        <li>Humidity: ${fiveDayArray[i].main.humidity}</li>
        <li>Temp: ${fiveDayArray[i].main.temp}</li>
        <li>Wind Speed: ${fiveDayArray[i].wind.speed}</li>
        </ul>
        </div>
    `
        // Update the forecast container with the generated HTML
            daysElement.innerHTML = daysCard;
    }
    })
    
    }