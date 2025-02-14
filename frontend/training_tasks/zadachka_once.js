
function once(fn) {
    let count = 0
    return function f(...params) {
        //console.log(params)
        if (count === 0) {
            count += 1
            fn(...params)
        }
    }
}


const sayHyOnce = once(function sayHi() {
    console.log('Hi!')
})

const sayNastyaOnce = once(function sayNastya() {
    console.log('Hi Nastya!')
})

const saySomeoneOnce = once(function saySomeone(name, ads) {
    console.log('Hi', name, ads)
})

sayHyOnce()
sayHyOnce()
sayHyOnce()

saySomeoneOnce('zhenek', 'test')