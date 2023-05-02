const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngr= document.getElementById(`ingredients`)

ingredients.forEach(ingredient => {
  const listIngridient = document.createElement(`li`);
  listIngridient.classList.add(`item`);
  listIngridient.textContent = ingredient;
  listIngr.append(listIngridient)
})



