Array.prototype.myFilter = function(callback) {
    res = []
    this.forEach((element, idx) => {
        if (callback(element, idx)) { // 2 index
            res.push(element)
        }
    })
    return res
}

const arr = [1, 3, 3, 4, 5, 6]

//* то что есть в джаваскрипте встроенный */
const resultArrFilter = arr.filter(function (element, idx) {
    return element % 2 === 0 && idx > 3
}) // встроенный метод (пример как работает)

console.log(resultArrFilter)

const resultArrMyFilter = arr.myFilter(function (element, idx) {
    return element % 2 === 0 && idx > 3
}) // наш собственный метод

console.log(resultArrMyFilter)