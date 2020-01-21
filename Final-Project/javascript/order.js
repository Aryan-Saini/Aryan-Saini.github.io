var doc = document;
var back = doc.getElementById('back');
var pickUp = doc.getElementById('pick-up');
var dilevery = doc.getElementById('delivery');
var address = doc.getElementById('address');
var number = doc.getElementById('number');
var drinkOption = doc.getElementById('drinkOption');
var pizzaSelector = doc.getElementById('pizzaOption');
var pizzaType = doc.getElementById('pizzaType');

/**
 * checks what button has been clicked and display the form related to that button
 * it displays certain items related to the option clicked
 * also adds a back button to the thing
 */
function formDisplay(n) {
  var form = doc.getElementsByTagName('form');
  back.style.display = 'block';
  form[0].style.display = 'block';
  if (n == 1) {
    address.style.display = 'none';
    number.style.display = 'block';
    dilevery.style.display = 'none';
  } else if (n == 2) {
    number.style.display = 'none';
    address.style.display = 'block';
    pickUp.style.display = 'none';
  } else {
    dilevery.style.display = 'block';
    pickUp.style.display = 'block';
    form[0].style.display = 'none';
    back.style.display = 'none';
  }
}

pizzaSelector.addEventListener('change', function() {
  //Depending on pizzaSelector.value, display what you want
  var pizzaNum = pizzaSelector.value;
  selectorPizza(pizzaNum);
});

function selectorPizza(n) {
  var num = n;
  if (num == '1') {
    pizzaType.style.display = 'block';
    drinkOption.style.display = 'none';
  } else if (num == '2') {
    drinkOption.style.display = 'block';
    pizzaType.style.display = 'none';
  } else {
    drinkOption.style.display = 'none';
    pizzaType.style.display = 'none';
  }
}
