var countries = require('../rest countries/restCountries.json')

//countries in asia - filter
let asia = countries.country.filter((a)=>a.region == "Asia")
// console.log("Countries in asia :",asia)
// console.log("asian countries in length",asia.length)

//countries with population less than 2L
let pop =countries.country.filter((a)=>a.population<200000)
// console.log("population less than 200000",pop)
// console.log("population less than 200000",pop.length)

// Bumpup the current population of all the country by 1L 

pop =countries.country.filter((a)=>a.population+=200000)
// console.log("population of all the country by 1L",pop)
// console.log("population of all the country by 1L",pop.length)

// convert all the names in capital - map
//not working have to find bug
pop = countries.country.map((n) => n.name)

console.log(pop)

//population sum

let totalPopulation = countries.country.reduce((total, curr) => {
    return total = +curr.population
}, 0)
//.reduce((total, country) => total + country.population, 0)
console.log(totalPopulation)

let asiaPopulation = countries.country.filter((reg) => reg.region == "Asia").reduce((total, country) => total + country.population, 0)

console.log(asiaPopulation)
