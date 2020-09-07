//container zone
let header = document.createElement("div")
header.classList.add("container-fluid","text-center")
header.style.backgroundColor = "#34ebc9"

//declaring div
let box = document.createElement("div")
box.classList.add("box")

//declaring  inner div
let counter = document.createElement("div")
counter.classList.add("col-md-5", "offset-md-4", "text-center", "rounded", "align-middle")
counter.style.backgroundColor = "#332255"
counter.style.color = "#ffffff"
counter.style.padding = "10px"
counter.style.marginBottom = "5px"


//appending content
let text = document.createElement("h1")
text.classList.add("heading")
text.style.fontSize = "50px"
text.style.fontFamily = "cursive"
var m = document.createElement("audio"); 
m.setAttribute("src", "hbd.mp3");
m.setAttribute("autoplay","true") 


// m.autoplay = true
//   if (m.canPlayType("audio/mp3")) { 
//       m.setAttribute("src", "Happy Birthday English 2.mp3"); 
//   } else { 
//       m.setAttribute("src", "Happy Birthday English 2.mp3"); 
//   } 
 
  m.setAttribute("controls", "controls"); 

/**
 * Params" none
 * this is to set timer for birthday
 */
setTimeout(() => {
    text.innerHTML = "10"
    setTimeout(() => {
        text.innerHTML = "9"
        setTimeout(() => {
            text.innerHTML = "8"
            setTimeout(() => {
                text.innerHTML = "7"
                setTimeout(() => {
                    text.innerHTML = "6"
                    setTimeout(() => {
                        text.innerHTML = "5"
                        setTimeout(() => {
                            text.innerHTML = "4"
                            setTimeout(() => {
                                text.innerHTML = "3"
                                setTimeout(() => {
                                    text.innerHTML = "2"
                                    setTimeout(() => {
                                        text.innerHTML = "1"
                                        setTimeout(() => {
                                            text.innerHTML = "0"
                                            setTimeout(() => {
                                                text.innerHTML = "Happy Birthday Srikanth!!!!!!!!"
                                                text.style.fontSize = "50px"
                                                counter.classList.add("col-md-12")
                                                counter.classList.remove("offset-md-4")
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);    
                                }, 1000
                                );
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

counter.appendChild(text)
box.appendChild(counter)
header.appendChild(box)
header.appendChild(m)


document.body.append(header)