const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, makePizza, onOrderError) {
    for (let pizza of this.pizzas) {
      if (pizza === pizzaName) {
        return makePizza(pizzaName);
      }
      return onOrderError(pizzaName);
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(pizzaName) {
  return `Error! ${pizzaName}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
