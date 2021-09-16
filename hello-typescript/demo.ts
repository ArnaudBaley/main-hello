// variable
let a: number = 0

// function
function isEven(num: number): boolean{
    return num % 2 === 0
}
console.log(isEven(a))

// array param
function hello(t: Array<string>): Array<string> {
    let out = []
    for(let item of t) {
        out.push('hello' + item)
    }
    return out
}
console.log(hello(['aze', 'aze', 'aze']))

// dual type param
function dualParam(num: number | string): boolean {
    if (typeof num !== 'number') {
        num = parseInt(num, 10);
    }
    return <number>num % 2 === 0
}
console.log(dualParam('2'))

// object param
function objectParam(num: number, options: {a: number, b?: string}): number {
    return num + a
}

// callback
function withCallback(num: number, callback: (number) => void): boolean {
    return num % 2 === 0
}
withCallback(2,  function (even) {
    console.log(even)
})