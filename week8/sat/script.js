let header = document.createElement("div")
header.classList.add("container-fluid","text-center")
header.style.backgroundColor = "#34ebc9"


let box = document.createElement("div")
box.classList.add("box")

let counter = document.createElement("div")
counter.classList.add("col-md-5", "offset-md-4", "text-center", "rounded", "align-middle")
counter.style.backgroundColor = "#332255"
counter.style.color = "#ffffff"

let text = document.createElement("h1")
text.classList.add("heading")
text.innerHTML = "10"
text.style.fontSize = "50px"

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
                                                text.innerHTML = "Happy Birthday to me!!!!!!!!"
                                                text.style.fontSize = "5rem"
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


document.body.append(header)