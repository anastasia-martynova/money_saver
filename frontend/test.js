const dateOptions = {month: 'long', day: 'numeric'}

function renderLoader() {
  const newDiv = document.createElement("div")
  const newTextLoading = document.createElement("span")
  newDiv.className = "expenses_list__item_wrapper_load"
  newTextLoading.className = "expenses_list__loader_text"
  newTextLoading.innerText = "Loading..."

  newDiv.appendChild(newTextLoading)
  const currentDiv = document.getElementsByClassName("expenses_list__wrapper_list")[0]
  currentDiv.appendChild(newDiv)
}

function hideLoader() {
  const loaderDiv = document.getElementsByClassName("expenses_list__item_wrapper_load")[0]
  loaderDiv.remove()
}




function renderExpense(expenseId, date, cost, category){
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

  const currentDiv = document.getElementsByClassName("expenses_list__wrapper_list")[0]
  currentDiv.appendChild(newDiv)
}

function renderExpenses(data){
  data.expenses.forEach(expense => {
    renderExpense(expense.expenseId, expense.date, expense.cost, expense.category)
  });
}

renderLoader()

fetch('http://localhost:3000/api/expenses')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    hideLoader()
    renderExpenses(data)
  }).then((data) => console.log(data));

// document.onreadystatechange = function () {
//   if (document.getElementsByClassName(
//     "expenses_list__wrapper_list").readyState !== "complete") {
//       document.getElementsByClassName(
//           "expenses_list__wrapper_list").style.visibility = "hidden";
//       document.getElementsByClassName(
//           "expenses_list__loader").style.visibility = "visible";
//   } else {
//       document.getElementsByClassName(
//           "expenses_list__loader").style.visibility = "hidden";
//       document.getElementsByClassName(
//           "expenses_list__wrapper_list").style.visibility = "visible";
//   }
// }