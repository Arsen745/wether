// https://api.openweathermap.org/data/2.5/weather?q=London&appid=6511e14723ad8cb6f243ece1366c5deb
// Dom
const h3 = document.querySelector('h3')
const input = document.querySelector('input')
const button = document.querySelector('button')
const numberPogoda = document.querySelector('h2')
const vlaj = document.querySelector('.vlaj span')
const speed = document.querySelector('.speed span')
const names = document.querySelector('.names')
const img = document.querySelector('.img img')

const url = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key = '&appid=6511e14723ad8cb6f243ece1366c5deb'
function getWeather(cityName = "Bishkek") {
    fetch(url + cityName + api_key)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            h3.innerHTML = `${data.name} <span>${data.sys.country}</span>`
            numberPogoda.innerHTML = `${Math.floor(data.main.temp - 273.15)} <span>°c</span>`
            vlaj.innerHTML = `${data.main.humidity}%`
            speed.innerHTML = `${data.wind.speed}км/ч`
            names.innerHTML = `${data.weather[0].main
                } `
                button.addEventListener('click', () => {
                    getWeather(input.value)
                    input.value = ''
                    if (input.value ===  data.name) {
                        getWeather()
                
                        
                
                    }else {
                        h3.innerHTML = 'Такое город не существует'
                        numberPogoda.innerHTML = ``
                        vlaj.innerHTML = ``
                        speed.innerHTML = ``
                        names.innerHTML = ``
                        img.src = ''

                    }
                })


            
            if (data.weather[0].main === 'Clear') {
                img.src = './images/sunny.png'
                names.innerHTML = `Жарко`


            }
            if (data.weather[0].main === 'Snow') {
                img.src = './images/snow.png'
                names.innerHTML = `Снег`

            }
            if (data.weather[0].main === 'Rain') {
                img.src = './images/rain2.png'
                names.innerHTML = `Дождь`

            }
            if (data.weather[0].main === 'Clouds') {
                img.src = './images/rain.png'
                names.innerHTML = `Облачно`

            }


        })
}

getWeather()