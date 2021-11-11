const city = document.querySelector(".city");
const img = document.querySelector(".icon");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".description");
const hum = document.querySelector(".humidity");

weather = {
    "API_key": "b8bf7f69e6001c16ade11d8120a02f4d",
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.API_key}`)
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        console.log(name, icon, description, temp, humidity);
    }
}

