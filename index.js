var recipes = { ingredient: "amount" }

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  return Object.assign( {}, recipes, { [ingredient]: amount} )
}
