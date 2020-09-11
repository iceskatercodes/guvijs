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


//weather data
async function getWeather(countryData, card, header, body, image) {
    let key = "da17c131445c45630bc0602185c70ae0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryData.capital?countryData.capital:"Ushuaia"}&appid=${key}`;
    fetch(url)
        .then((resp) => {
            return resp.json()
        }).then((data) => {
            showWeather(data, card, header, body, image)
        }).catch((err) => {
            console.error(err);
        })
}

//appending data
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
    let capital = document.createElement("p");
    capital.innerText = "Capital : " + data.capital;
    let region = document.createElement("p");
    region.innerText = "Region : " + data.region;
    let timezone = document.createElement("p");
    timezone.innerText = "TimeZone : " + data.timezones[0];
   
    let button = document.createElement("button");
    button.classList.add("btn-info", "mt-3", "mb-1")
    button.innerText = "Weather report"

    button.addEventListener("click", function () {
        getWeather(data, card, header, body, img);
    });

    body.append(capital, region, timezone, button)
    card.append(header, img, body)
    col.append(card)

    container.append(col);
}

//weather Data
async function showWeather(data, card, header, body, image) {
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
    status.innerText = `Status : ${data.weather[0].main}(${data.weather[0].description})`;
    let temp = document.createElement("p");
    temp.innerText = `Temperature : ${(data.main.temp - 273.15).toFixed(2)} \xB0c`;
    let humidity = document.createElement("p");
    humidity.innerText = `Humidity : ${data.main.humidity}%`;
   
    let button = document.createElement("button");
    button.classList.add("btn-primary", "mt-2");
    button.innerText = "Return";
    button.addEventListener("click", function () {
        card.removeChild(newBody),
            card.removeChild(newHeader);
        card.append(header, image, body);
    })
    newBody.append(img, status, temp, humidity, button);
    card.append(newHeader, image, newBody);
}

