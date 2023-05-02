

const inputEl = document.getElementById(`name-input`)
const texttEl = document.getElementById(`name-output`)

inputEl.addEventListener(`input`, onOutputChange) 

function onOutputChange(event) {
    console.log(event.currentTarget.value)
    texttEl.textContent=event.currentTarget.value
}