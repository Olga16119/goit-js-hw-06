


const validInput = document.getElementById(`validation-input`)

validInput.addEventListener(`blur`, onInputChangeBorder);

function onInputChangeBorder(ev) {
    console.log(ev.currentTarget.value);

    if (ev.currentTarget.value.length <= +validInput.dataset.length) {
        validInput.classList.add(`invalid`);
    }
    else {
        validInput.classList.add(`valid`);
        validInput.classList.remove(`invalid`)
    }
}