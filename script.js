//your code here
let table = document.querySelector('table');
let newRow = document.createElement('tr');
let prices = document.querySelectorAll('[data-ns-test="price"]');
let sum = 0;
prices.forEach((item) => {sum+=(parseInt(item.textContent))});
let total = document.createElement('tr');
total.setAttribute("data-ns-test","grandTotal")
total.textContent = sum;
newRow.appendChild(total);
table.appendChild(newRow);