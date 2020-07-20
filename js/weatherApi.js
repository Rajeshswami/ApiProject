// async function getPlaces() {
//   var input = document.getElementById("input");
//   await new google.maps.places.Autocomplete(input);
// }

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchKey = document.getElementById("input").value;
  console.log(searchKey);
  searchWeather(searchKey);
});
function searchWeather(searchKey) {
  let WeatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=a0e9f88feda532d16a2740ea6c88fdec`;
  window
    .fetch(WeatherApi)
    .then((data) => {
      data
        .json()
        .then((weather) => {
          let weatherData = weather.weather;
          let main = weather.main;
          output = [];
          for (let x of weatherData)
            output += `<div class = "col-md-12 mt-4 card">
          <div class = "card-body">
          <h1>${weather.name}</h1>
          <div>
          <p class = "icon">
          <img src = "http://openweathermap.org/img/wn/${x.icon}.png"></p>
          <p><span>temp:</span>
          < class = "temp">${weather.main.temp}&deg;c</span></p>
          <p class = "des float-left">humidity : ${x.description}</p>
          <p class = "des float-left">humidity : ${x.main}</p>

          </div>
          </div>
          </div>`;
          document.getElementById("weatherTemplate").innerHTML = output;
        })
        .catch((err) => console.log(err));
    })
    .catch();
}
