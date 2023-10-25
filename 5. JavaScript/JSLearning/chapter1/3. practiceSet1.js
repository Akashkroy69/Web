let a = 10;
let b = "hello";
// q1
console.log(a + b)
// q2
console.log(typeof (a+b))


// q3: an object is created using const, can it be changed to assigning a number? NO
// but we can add any item in it.

const items = {
    a: 10,
    "b": "11",
    c:true
}
// items = 10; this will not work
items["d"] = "akash";
console.log(items)
console.log(items["d"])
console.log(items.c)

