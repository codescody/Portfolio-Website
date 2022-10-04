const titleText = document.querySelector("#intro-container")
const stringText = titleText.textContent
const indivText = stringText.split("")
titleText.textContent = ""
console.log(stringText)

for(let i=0; i < indivText.length; i++) {
    titleText.innerHTML += "<span>"+ indivText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50)

function onTick() {
    const span = titleText.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++
    if (char === indivText.length) {
        completeClear()
        return
    }
}
function completeClear() {
    clearInterval(timer)
    timer = null
}