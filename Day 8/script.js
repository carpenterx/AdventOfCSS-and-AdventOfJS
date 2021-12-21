// cd1dcdb56c89e953e6de1dbd442d91c5
// api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid={API key}

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//current,minutely,hourly,alerts
//daily

const forecast = document.getElementById("forecast")

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

const weatherMains = ["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds"]
const weatherStyles = ["stormy", "partly-cloudy", "rainy", "snowy", "sunny", "cloudy"]
const defaultStyle = "partly-cloudy"

forecast.innerHTML = ""
ParseWeatherData()

class DayForecast {
    constructor(dayName, dayNumber, dayTemp, dayTempMin, precipitation, weatherClass) {
        this.dayName = dayName;
        this.dayNumber = dayNumber;
        this.dayTemp = dayTemp;
        this.dayTempMin = dayTempMin;
        this.precipitation = precipitation;
        this.weatherClass = weatherClass;
    }
}

async function GetWeatherData() {
    let response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=45.450001&lon=28.049999&exclude=current,minutely,hourly,alerts&units=metric&appid=cd1dcdb56c89e953e6de1dbd442d91c5")
    let data = await response.json()
    return data
}


function ParseWeatherData() {
    GetWeatherData().then(data => {
        for (let i = 0; i < data.daily.length - 1; i++) {
            let day = data.daily[i]

            // console.log("dt: " + Date.parse(day.dt))
            let dayDate = new Date(parseInt(day.dt) * 1000)
            // console.log("dt: " + day1Date)

            // console.log("Day Index: " + dayDate.getDay())
            let dayName = dayNames[dayDate.getDay()]
            // console.log("Day Name: " + dayName)

            let dayNumber = dayDate.getDate()
            // console.log("Day Number: " + dayNumber)

            let dayTemp = Math.round(Number(day.temp.day)) + "°"
            // console.log("Day Temp: " + dayTemp)

            let dayTempMin = Math.round(Number(day.temp.min)) + "°"
            // console.log("Day Temp Min: " + dayTempMin)

            let precipitation = Number(day.pop) * 100 + "%"
            // console.log("Precipitation: " + precipitation)

            let weatherMain = day.weather[0].main
            //console.log("Weather description: " + weatherMain)
            let weatherIndex = weatherMains.indexOf(weatherMain)
            let weatherClass = defaultStyle
            if (weatherIndex != -1) {
                weatherClass = weatherStyles[weatherIndex]
            }
            // console.log("Weather style: " + weatherClass)

            let dayForecast = new DayForecast(dayName, dayNumber, dayTemp, dayTempMin, precipitation, weatherClass)
            GenerateDay(dayForecast)
        }
    })
}


function GenerateDay(dayForecast) {
    forecast.innerHTML += `
            <div class="day-forecast">
                <div class="day">${dayForecast.dayName}</div>
                <div class="date">${dayForecast.dayNumber}</div>
                <div class="day-forecast-widget ${dayForecast.weatherClass}-background">
                    <div class="icon"><img class="${dayForecast.weatherClass}-icon" src="images/${dayForecast.weatherClass}.svg" alt=""></div>
                    <div class="temperature ${dayForecast.weatherClass}-temperature">${dayForecast.dayTemp}</div>
                    <div class="bottom">
                        <div class="precipitation ${dayForecast.weatherClass}-text">
                            <svg class="small-icon" width="32" height="32" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M30.5363 15.355C28.9868 9.16 23.7398 4.705 17.4998 4.0825V1H14.4998V4.0825C8.25982 4.705 3.01282 9.16 1.46332 15.355C1.32382 15.913 1.51582 16.504 1.95982 16.8715C2.40382 17.239 3.01732 17.3215 3.54232 17.0845C7.07332 15.475 11.1953 15.73 14.4953 17.635V27.25C14.4953 29.3185 16.1783 31 18.2453 31C20.3123 31 21.9953 29.3185 21.9953 27.25V26.5H18.9953V27.25C18.9953 27.664 18.6593 28 18.2453 28C17.8313 28 17.4953 27.664 17.4953 27.25V17.6425C20.7968 15.7315 24.9263 15.472 28.4603 17.0845C28.9838 17.323 29.5988 17.2405 30.0428 16.8715C30.4868 16.5025 30.6758 15.913 30.5363 15.355ZM15.9998 15.01C13.7243 13.693 11.1518 13 8.49982 13C7.46482 13 6.44182 13.1065 5.43982 13.318C7.49032 9.4915 11.5013 7 15.9998 7C20.4983 7 24.5093 9.4915 26.5598 13.318C22.9943 12.5665 19.1633 13.1785 15.9998 15.01Z"
                                    fill="currentColor" />
                            </svg>
                            <div class="precipitation-value">${dayForecast.precipitation}</div>
                        </div>

                        <div class="low-temperature ${dayForecast.weatherClass}-text">
                            <svg class="small-icon" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.8917 6.91939C19.8917 4.77378 18.1456 3.02771 16 3.02771C13.8544 3.02771 12.1083 4.77378 12.1083 6.91939V18.7916C10.8785 19.8943 10.1625 21.4704 10.1625 23.1347C10.1625 26.3545 12.7816 28.9723 16 28.9723C19.2184 28.9723 21.8375 26.3545 21.8375 23.1347C21.8375 21.4717 21.1215 19.893 19.8917 18.7916V6.91939ZM16 26.3778C14.2124 26.3778 12.7569 24.9236 12.7569 23.1347C12.7569 22.0814 13.2771 21.089 14.1489 20.478L14.7028 20.0902V6.91939C14.7028 6.20462 15.2852 5.62217 16 5.62217C16.7148 5.62217 17.2972 6.20462 17.2972 6.91939V20.0915L17.8511 20.4793C18.7229 21.0877 19.2431 22.0814 19.2431 23.1347C19.2431 24.9236 17.7876 26.3778 16 26.3778Z"
                                    fill="currentColor" />
                                <circle cx="16" cy="23.176" r="1.75506" fill="currentColor" />
                            </svg>
                            <div class="low-value">${dayForecast.dayTempMin}</div>
                        </div>
                    </div>
                </div>
            </div>
    `
}