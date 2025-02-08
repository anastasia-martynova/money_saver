const dateOptions = {month: 'long', day: 'numeric'}

function createAndAddNewExpense(expenseId, date, cost, category){
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

  newDiv.appendChild(newSpanDate)
  newDiv.appendChild(newSpanPrice)
  newDiv.appendChild(newSpanIconWrapper)
  newSpanIconWrapper.appendChild(newImgIcon)

  const currentDiv = document.getElementsByClassName("expenses_list__wrapper_list")[0]
  currentDiv.appendChild(newDiv)

  let newDate = new Date(date)
  document.getElementsByClassName("expenses_list__item_date")[expenseId].textContent = newDate.toLocaleDateString("en-US", dateOptions)
  document.getElementsByClassName("expenses_list__item_price")[expenseId].textContent = `${cost} р`
}

function addAllExpensesToHtml(data){
  data.expenses.forEach(expense => {
    createAndAddNewExpense(expense.expenseId, expense.date, expense.cost, expense.category)
  });
}

fetch('http://localhost:3000/api/expenses')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    addAllExpensesToHtml(data)
  });