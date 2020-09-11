import { data } from './data.js';
let dat = { "data": data }

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
var head = document.createElement("tr")
let idhead = document.createElement("p")
idhead.innerHTML = "Native Name"
let namehead = document.createElement("p")
namehead.innerHTML = "Country Name"
let mailhead = document.createElement("p")
mailhead.innerHTML = "Capital"


th1.append(idhead)
th2.append(namehead)
th3.append(mailhead)
head.append(th1, th2, th3)




let heading = document.createElement("h1")
heading.innerHTML = "PAGINATION"
var current_page = 1;
var p_count = 10;



let prev = document.createElement("a")
prev.innerHTML = "Previous"
prev.href = "#"
prev.onclick = function () { pageNum(0, true) }
pager.append(prev)


//pagination stuff
let page_count = dat.data.length / p_count

for (let i = 0; i < page_count; i++) {
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
        Capital.classList.add("capital")
        let mail = document.createElement("p")
        mail.innerHTML = obj.data[i].capital
        Capital.append(mail)
        

        td1.append(nativeName)
        td2.append(countryName)
        td3.append(Capital)
        tr.append(td1, td2, td3)
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
    items(dat, p_count, current_page)
}