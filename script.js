let weatherData = {
    apiKey : "36abb9d8cd715f8b7b02d469589c6ee8",
    fetchData : function(cityName){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid="+ this.apiKey
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather : function(data){
        const {name:cityName} = data;
        const {icon:Weather_icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed:windSpeed} = data.wind;
        document.querySelector(".city").innerHTML = "Weather in " + cityName;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + Weather_icon + "@2x.png";
        document.querySelector(".temp").innerHTML = Math.round(temp - 273.15) + "°C";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity = " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind peed = " + windSpeed + " Km/h";
    },

    searchVal : function(){
        this.fetchData(document.querySelector(".search-bar").value);
    }
}; 

document.querySelector(".search Button").addEventListener("click", function(){
    weatherData.searchVal();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.keyCode === 13){
        weatherData.searchVal();
    }
});
