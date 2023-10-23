const key ='a131eaff5d2179898db49fed43a34868';

document.getElementById('search').onclick = 
function(){
    const city = document.getElementById('city').value;
    const url =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`

    fetch(url).then(res=>res.json()).then(data => {console.log(data);
    
    //const lat=data.coord.lat;
    //const lon=data.coord.lon;

    var currentDate = new Date();    
    currentDate = currentDate.toLocaleString().substring(0, 10);

document.getElementById('current').innerHTML=`
<h3>${city}</h3>
<p>${data.list.dt_txt}</p>
<li>Humidity: ${data.list.main.humidity}</li>
<li>Temp: ${data.list.main.temp}</li>
<li>Wind Speed: ${data.list.wind.speed}</li>
`
document.getElementById('current').style.fontSize = '24px';

var daysElement = document.getElementById('days');
daysElement.innerHTML = ''; // Limpiar el contenido xistente
    
for (var i = 0; i < 5; i++) {
var date = new Date();
date.setDate(date.getDate() + i + 1);
date.toLocaleString().substring(0, 10);

daysElement.innerHTML += `
<div>
    <p>${date}</p>
    <ul>
    <li>Humidity: ${data.dt.humidity}</li>
    <li>Temp: ${data.main.temp}</li>
    <li>Wind Speed: ${data.wind.speed}</li>
    </ul>
    </div>
`
        daysElement.style.fontSize= "20px";
}
})

}

