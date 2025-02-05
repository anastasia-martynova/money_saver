fetch('http://localhost:3000/api/expenses')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data["05.02.2025"]);
  });