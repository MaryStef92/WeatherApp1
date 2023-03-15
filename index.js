

let date = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[date.getDay()];

let hours = date.getHours();
let minutes = date.getMinutes();

let corectDate = document.querySelector("#date");
corectDate.innerHTML = `${day} ${hours}:${minutes}`;

let cloudy = document.querySelector("#cloud");
cloudy.innerHTML = "Partly Cloudy";

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityInput = document.querySelector("#city");
  cityInput.innerHTML = searchInput.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city?");
city = city.toLowerCase();

if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);

  alert(
    "It is currently " +
      celsiusTemperature +
      "°C in Paris with a humidity of " +
      humidity +
      "%"
  );
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather" +
      city
  );
}*/
