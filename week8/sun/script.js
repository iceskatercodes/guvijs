async function countryData(){
    try{
        let url = "https://restcountries.eu/rest/v2/all";
        let response = await fetch(url);
        return response.json();
    }catch(error){
        console.error(error);
    }
}
countryData();

async function weatherData(item){

    let api_key = "da17c131445c45630bc0602185c70ae0";
    let ow_link = "https://api.openweathermap.org/data/2.5/weather?";

    try{
        let latlon = await countryData()
        latlon = latlon[item].latlng
        let lat = latlon[0]
        let lon = latlon[1]
        url = `${ow_link}lat=${lat}&lon=${lon}&appid=${api_key}`;
        let response = await fetch(url);
        return response.json();
    }catch(error){
        console.error(error);
    }
}


//header
document.body.style.backgroundColor = "#fab"

let container = document.createElement("div")
container.classList.add("container")

let row = document.createElement("div")
row.classList.add("row")

let top_col = document.createElement("div")
top_col.classList.add("col-4")
top_col.style.textAlign = "center"


let top_head = document.createElement("p")
top_head.innerText = "Countries & Weather"
top_head.style.color = "white"
top_col.append(top_head)
row.appendChild(top_col)

async function createCards(id){
    
    let content = await countryData()
    let flag = content[id].flag
    let name = content[id].name
    let capital = content[id].capital
    let region = content[id].region
    let latitude = content[id].latlng[0]
    let longitude = content[id].latlng[1]
    let c_code = content[id].alpha3Code

    let col = document.createElement("div")
    col.classList.add("col-lg-4", "col-xs-4")
    
    let cards = document.createElement("div")
    cards.classList.add("card-flex", "border", "mt-3", "mb-3")
    cards.style.borderRadius = "6px"
    cards.style.textAlign = "center"
    
    let cardhead = document.createElement("div")
    cardhead.classList.add("card-header")
    cardhead.style.backgroundColor = "#ccddee"
    cardhead.style.color = "black"
    cardhead.innerText = name
    
    let cardbody = document.createElement("div")
    cardbody.classList.add("card-body")
    cardbody.style.backgroundImage = "linear-gradient(to left, #3F5151 , #DAC8A2)"
    
    let flag_image = document.createElement("img")
    flag_image.src = flag
    flag_image.classList.add("img")
    flag_image.style.height = "200px"
    flag_image.style.maxWidth = "100%"

    let details = document.createElement("div")
    details.classList.add("mt-3")
    details.style.color = "#FFF"
    details.innerHTML = `Capital : ${capital}<br>`
    details.innerHTML += `Region : ${region}<br>`
    details.innerHTML += `Country code : ${c_code}<br>`
    details.innerHTML += `Latitude : ${latitude}<br>`
    details.innerHTML += `Longitude : ${longitude}<br>`

    let button = document.createElement("button")
    button.classList.add("btn", "btn-outline-light", "mt-2")
    button.onclick = async function() {
        let w_data = await weatherData(id)
        let main = w_data.weather[0].main
        let desc = w_data.weather[0].description
        let iconcode = w_data.weather[0].icon
        let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        let base = w_data.base
        let temp = w_data.main.temp
        let w_speed = w_data.wind.speed
        
        let alert = document.createElement("div")
        alert.classList.add("alert", "alert-success", "mt-3")
        alert.setAttribute("role", "alert")
        
        let head = document.createElement("h3")
        head.innerHTML = "Weather Details"

        let image = document.createElement("img")
        image.src = iconurl

        let lis = document.createElement("p")
        lis.innerHTML += main
        lis.innerHTML += `<br>Status : ${desc}<br>`
        lis.innerHTML += `Base : ${base}<br>`
        lis.innerHTML += `Temprature : ${temp}&deg;F<br>`
        lis.innerHTML += `Wind Speed : ${w_speed}<br>`

        let but = document.createElement("button")
        but.classList.add("btn", "btn-outline-secondary")
        but.innerText = "Go Back"
        but.onclick = function() {
            cardbody.removeChild(alert)
            cardbody.append(flag_image, details)
        }

        alert.append(head, image, lis, but)
        cardbody.removeChild(details)
        cardbody.removeChild(flag_image)
        cardbody.appendChild(alert)
    }
    button.innerText = "Click for weather"
    details.appendChild(button)

    cardbody.append(flag_image, details)
    
    cards.append(cardhead, cardbody)
    col.append(cards)
    row.append(col)
}

async function getCards(){

    for(let i = 0; i < 250; i++){
        await createCards(i)
    }
}

getCards()

container.appendChild(row)
document.body.append(container)
