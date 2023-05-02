


// const counterValue = {
//     value: 0,
//     decrement(value) {
//         console.log(this)
//         this.value-=value;
//     },
//     increment(value) {
//         console.log(this)
//         this.value+=value
//     }
// }

// const upDateCounter = function (value, operation) {
//     operation(value)
// }

// upDateCounter(1, counterValue.decrement)
// upDateCounter(1,counterValue.increment)



const valueSpan = document.getElementById(`value`);
const btnDecr = document.querySelector(`[data-action= "decrement"]`);
const btnIncr = document.querySelector(`[data-action="increment"]`);

let counterValue = 0;

btnDecr.addEventListener(`click`, () => {
    counterValue -= 1
    valueSpan.textContent=counterValue
})
btnIncr.addEventListener(`click`, () => {
    counterValue += 1
    valueSpan.textContent=counterValue

})


