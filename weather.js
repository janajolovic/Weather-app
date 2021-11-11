const city = document.querySelector(".city");
const img = document.querySelector(".icon");
const tem = document.querySelector(".temp");
const desc = document.querySelector(".description");
const hum = document.querySelector(".humidity");
const btn = document.querySelector(".btn");
const search_bar = document.querySelector(".search-bar");

weather = {
    "API_key": "b8bf7f69e6001c16ade11d8120a02f4d",
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.API_key}`)
            .then(response => response.json())
            .then(data => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        city.innerText = `Weather in ${name}`;
        img.src = `https://openweathermap.org/img/wn/${icon}.png`
        tem.innerText = `${Math.round(temp)}°C`;
        desc.innerText = description;
        hum.innerText = humidity + "%";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function() {
        this.fetchWeather(search_bar.value)
    }
}

btn.addEventListener("click", () => {
    weather.search();
})

search_bar.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        weather.search();
    } 
})

weather.fetchWeather("Novi Pazar")