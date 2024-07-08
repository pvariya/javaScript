const mapper = (data) => {
  document.getElementById('city-name').innerText = `City: ${data.name}`;
  document.getElementById('temperature').innerText = `Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`;
  document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
  document.getElementById('weather-info').style.display = 'block';
};

const api = async (city) => {
  let req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=277742f94296367790c0cc8bea0dd0ef`
  );
  let res = await req.json();
  console.log(res);
  mapper(res);
};

const weather = (e) => {
  e.preventDefault();
  let city = document.getElementById("city").value;
  api(city);
};

document.getElementById("form").addEventListener("submit", weather);
