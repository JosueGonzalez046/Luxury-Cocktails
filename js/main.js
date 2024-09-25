//The user will enter a cocktail. Get a cocktail name, photo, ingredients and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[1].strDrink
      document.querySelector('img').src = data.drinks[1].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[1].strInstructions
      document.querySelector('.one').innerText = data.drinks[1].strIngredient1
      document.querySelector('.two').innerText = data.drinks[1].strIngredient2
      document.querySelector('.three').innerText = data.drinks[1].strIngredient3
      document.querySelector('.four').innerText = data.drink[1].strIngredient4
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
