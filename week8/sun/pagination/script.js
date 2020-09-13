import { country } from './data.js';
let countries = { "data": country }

//container
var container = document.createElement("div")
container.classList.add("container")

//pager headding
let pager = document.createElement("div")
pager.classList.add("headding")


let table = document.createElement("table")
table.classList.add("tab")

let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
let th4 = document.createElement("th")
let th5 = document.createElement("th")
var head = document.createElement("tr")
let nName = document.createElement("p")
nName.innerHTML = "Native Name"
let cName = document.createElement("p")
cName.innerHTML = "Country Name"
let capital = document.createElement("p")
capital.innerHTML = "Population"
let population = document.createElement("p")
population.innerHTML = "Country flag"
let timezone = document.createElement("p")
timezone.innerHTML = "Lat Long"


th1.append(nName)
th2.append(cName)
th3.append(capital)
th4.append(population)
th5.append(timezone)
head.append(th1, th2, th3, th4,th5)




let heading = document.createElement("h1")
heading.innerHTML = "PAGINATION"
var current_page = 1;
var pCount = 20;



let prev = document.createElement("a")
prev.innerHTML = "Previous"
prev.href = "#"
prev.onclick = function () { pageNum(0, true) }
pager.append(prev)


//pagination stuff
let pageCount = countries.data.length / pCount

for (let i = 0; i < pageCount; i++) {
    let num = document.createElement("a")
    num.innerHTML = `${i + 1}`
    if (i == 0) {
        num.classList.add("active")
    }
    num.href = "#"
    num.id = `${i + 1}`
    num.onclick = function () { pageNum(i + 1, true) }
    pager.append(num)
}


pageNum(1)

let next = document.createElement("a")
next.innerHTML = "Next"
next.href = "#"
next.onclick = function () { pageNum(-1, true) }
pager.append(next)


container.append(heading, table,pager)
document.body.append(container)

function items(obj, count, page) {

    table.appendChild(head)

    for (let i = ((0 + 1) * (page - 1)) * 10; i < count * page; i++) {

        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")
        var td5 = document.createElement("td")

        let nativeName = document.createElement("div")
        nativeName.classList.add("nativeName")
        let id = document.createElement("p")
        id.innerHTML = obj.data[i].nativeName
        nativeName.append(id)

        let countryName = document.createElement('div')
        countryName.classList.add("countryName")
        let name = document.createElement("p")
        name.innerHTML = obj.data[i].name
        countryName.append(name)

        let Capital = document.createElement('div')
        Capital.classList.add("cCode")
        let mail = document.createElement("p")
        mail.innerHTML = parseInt(obj.data[i].population)
        Capital.append(mail)
        
        let flag = document.createElement('div')
        flag.classList.add("flag")
        let pop = document.createElement("img")
        pop.setAttribute("src", obj.data[i].flag);
        flag.append(pop)

        let timeZone = document.createElement('div')
        timeZone.classList.add("timezone")
        let tz = document.createElement("p")
        tz.innerHTML = obj.data[i].latlng.toString()
        timeZone.append(tz)

        td1.append(nativeName)
        td2.append(countryName)
        td3.append(Capital)
        td4.append(flag)
        td5.append(timeZone)
        tr.append(td1, td2, td3, td4, td5)
        table.append(tr)
    }

}

function pageNum(page, sam) {
    if (sam) {
        let cp = document.getElementById(`${current_page}`)
        cp.classList.add("active")
        cp.classList.remove("active")
    }
    if (page == 0) {
        if (current_page != 1) {
            current_page--
        }
    } else if (page == -1) {
        if (current_page < 10) {
            current_page++
        }
    } else {
        current_page = page
    }
    if (sam) {
        let cp = document.getElementById(`${current_page}`)
        cp.classList.add("active")
    }
    table.innerHTML = ""
    items(countries, pCount, current_page)
}