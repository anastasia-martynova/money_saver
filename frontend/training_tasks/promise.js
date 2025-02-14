const promise = new Promise(function (resolve, reject) {
  reject("data")

})

promise.finally(function () {})


// замедлить запрос

// показывать лоадер (finally)