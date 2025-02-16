const dateOptions = {month: 'long', day: 'numeric'}

function renderLoader() {
  const currentDiv = document.getElementsByClassName("expenses_list__wrapper_list")[0]
  const newDiv = document.createElement("div")
  const newTextLoading = document.createElement("span")
  newDiv.className = "expenses_list__item_wrapper_load"
  newTextLoading.className = "expenses_list__loader_text"
  newTextLoading.innerText = "Loading..."

  newDiv.appendChild(newTextLoading)
  currentDiv.appendChild(newDiv)
}

function hideLoader() {
  const loaderDiv = document.getElementsByClassName("expenses_list__item_wrapper_load")[0]
  loaderDiv.remove()
}

function renderExpense(expenseId, date, cost, category){
  const currentDiv = document.getElementsByClassName("expenses_list__wrapper_list")[0]
  const newDiv = document.createElement("div")
  const newSpanDate = document.createElement("span")
  const newSpanPrice = document.createElement("span")
  const newSpanIconWrapper = document.createElement("span")
  const newImgIcon = document.createElement("img")

  newDiv.className = "expenses_list__item_wrapper"
  newSpanDate.className = "expenses_list__item_date"
  newSpanPrice.className = "expenses_list__item_price"
  newSpanIconWrapper.className = "expenses_list__item_icon_wrapper"
  newImgIcon.className = "expenses_list__item_icon_image"
  newImgIcon.src = "assets/shopping_cart.png"
  newSpanDate.innerText = new Date(date).toLocaleDateString("en-US", dateOptions)
  newSpanPrice.innerText = `${cost} р`

  newDiv.appendChild(newSpanDate)
  newDiv.appendChild(newSpanPrice)
  newDiv.appendChild(newSpanIconWrapper)
  newSpanIconWrapper.appendChild(newImgIcon)
  currentDiv.appendChild(newDiv)
}

function renderExpenses(data){
  const currentDiv = document.getElementsByClassName("expenses_list__wrapper_list")[0]
  currentDiv.innerHTML = ''

  data.expenses.forEach(expense => {
    console.log(expense)
    renderExpense(expense.expenseId, expense.date, expense.cost, expense.category)
  });
}

renderLoader()

const expenseBtn = document.getElementsByClassName("expense_card__button")[0];
const expenseAmount = document.getElementsByClassName("expense_card__form__input_amount")[0];
const expenseDate = document.getElementsByClassName("expense_card__form__input_date")[0];


fetch('http://localhost:3000/api/expenses')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    hideLoader()
    renderExpenses(data)
  })


expenseBtn.addEventListener("click", function(){
  console.log('click')
  let expense = {
    date: expenseDate.value,
    cost: expenseAmount.value,
    category: "grocery"
  }
  fetch('/api/new_expense', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(expense)
  }).then(() => {fetch('http://localhost:3000/api/expenses')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      renderExpenses(data)
    })})
  
})
