

const listCategories = document.querySelectorAll(`li.item`)

console.log(`Number of categories:`, listCategories.length)

listCategories.forEach(function (list) {
    const title= list.querySelector(`h2`)
    const itemLi= list.querySelectorAll(`li`)
    console.log(`Category:`, title.textContent);
    console.log(`Elements:`,itemLi.length)
 
})


