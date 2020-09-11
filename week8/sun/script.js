let container = document.createElement("div");
container.classList.add("row");
container.classList.add("container-fluid");
let heading = document.createElement("div");
heading.classList.add("col", "col-lg-12", "col-sm-12", "col-md-12", "header")
container.append(heading)
let content = document.createElement("h1");
content.innerText = "Global weather Report "
heading.append(content)
document.body.append(container)



//all functions

//country data
fetch("https://restcountries.eu/rest/v2/all")
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        country(data)
    }).catch(function (err) { console.error(err) })

function country(data) {
    for (i = 0; i < data.length; i++) {
        displayData(data[i]);
    }
}

//country Data  append
function displayData(data) {
    let col = document.createElement("div");
    col.classList.add("col-xl-3");
    col.classList.add("col-md-12");
    col.classList.add("col-xl-3")
    let card = document.createElement("div");
    card.classList.add("cList", "card", "card-flex", "border", "mb-3")
    let header = document.createElement("div");
    header.classList.add("card-header", "hList");
    header.innerText = data.name;
    let img = document.createElement("img")
    img.classList.add("image", "mt-3", "mb-3");
    img.classList.add("card-img-top")
    let body = document.createElement("div");
    body.classList.add("card-body", "bodyList");
    img.setAttribute("src", data.flag);
    let nativeName = document.createElement("p");
    nativeName.innerText = "Native Name : " + data.nativeName;
    let shortName = document.createElement("p");
    shortName.innerText = "Short Name : " + data.alpha2Code;
    let languages = document.createElement("p");
    languages.innerText = "Native Language : " + data.languages[0].name;
    let capital = document.createElement("p");
    capital.innerText = "Capital : " + data.capital;
    let region = document.createElement("p");
    region.innerText = "Region : " + data.region;
    let timezone = document.createElement("p");
    timezone.innerText = "Time Zone : " + data.timezones[0];
    let curencyCode = document.createElement("p");
    curencyCode.innerText = "Currency Code : " + data.currencies[0].curencyCode;
    let curencyName = document.createElement("p");
    curencyName.innerText = "Currency Name : " + data.currencies[0].name;
    let curencySymbol = document.createElement("p");
    curencySymbol.innerText = "Currency Symbol : " + data.currencies[0].symbol;
   
    let button = document.createElement("button");
    button.classList.add("btn-info", "mt-3", "mb-1")
    button.innerText = "Weather report"

    button.addEventListener("click", function () {
        weatherData(data, card, header, body, img);
    });

    body.append(nativeName, languages, shortName, capital, region, timezone, curencyCode, curencyName, curencySymbol, button)
    card.append(header, img, body)
    col.append(card)

    container.append(col);
}

//weather data
async function weatherData(countryData, card, header, body, image) {
    let key = "da17c131445c45630bc0602185c70ae0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryData.capital?countryData.capital:"Ushuaia"}&appid=${key}`;
    console.log(url)
    fetch(url)
        .then((resp) => {
            return resp.json()
        }).then((data) => {
            displayWeather(data, card, header, body, image)
        }).catch((err) => {
            console.error(err);
        })
}
//weather Data append
async function displayWeather(data, card, header, body, image) {
    card.removeChild(body);
    card.removeChild(header);
    card.removeChild(image);
    let newHeader = document.createElement("div");
    newHeader.classList.add("card-header", "hList");
    newHeader.innerText = "Today"
    let newBody = document.createElement("div");
    newBody.classList.add("card-body", "bodyList");
    let img = document.createElement("img");
    let url = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    img.setAttribute("src", url)
    let status = document.createElement("p");
    status.innerText = `Description : ${data.weather[0].main}(${data.weather[0].description})`;
    let temp = document.createElement("p");
    temp.innerText = `Temperature : ${((data.main.temp - 273)).toFixed(1)} \xB0C`;
    let humidity = document.createElement("p");
    humidity.innerText = `Humidity : ${data.main.humidity}%`;
    let tempFeelsLike = document.createElement("p");
    tempFeelsLike.innerText = `Feels Like : ${(data.main.feels_like- 273).toFixed(1)} \xB0C`;
    let tempMin = document.createElement("p");
    tempMin.innerText = `Temperature Min. : ${(data.main.temp_min -273).toFixed(1)} \xB0C`;
    let tempMax = document.createElement("p");
    tempMax.innerText = `Temprature Max : ${(data.main.temp_max - 273).toFixed(1)} \xB0C`;
    let sunRise = document.createElement("p");
    sunRise.innerText = `Sun Rise : ${data.sys.sunrise }`;
    let sunSet = document.createElement("p");
    sunSet.innerText = `Sun Set : ${data.sys.sunset} `;
   
    let button = document.createElement("button");
    button.classList.add("btn-primary", "mt-2");
    button.innerText = "Return";
    button.addEventListener("click", function () {
        card.removeChild(newBody),
            card.removeChild(newHeader);
        card.append(header, image, body);
    })
    newBody.append(img, status, temp, humidity, tempFeelsLike, tempMin, tempMax,sunRise,sunSet,  button);
    card.append(newHeader, image, newBody);
}

