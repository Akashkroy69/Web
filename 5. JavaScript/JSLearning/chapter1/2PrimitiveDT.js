// primitives and objects
// primitives: 7 types: nn bb ss u
                    // number-null, boolean-bigint, string-symbol, undefined
// primitive and non-primitive

let a = 12;
let b = null;
let c = true;
let d = BigInt("123456") + BigInt("4");
let e = "akash";
let f = Symbol("a symbol created");
let g = undefined;

console.log(a,b,c,d,e,f,g);
console.log(typeof d)

// non-primitive DT, objects: key-value pair

const items = {
    "raining": true,
    "sunny" : false,
    "Stacy": "student",
    "roll no": 1,
    "akash": undefined
}
console.log(items["raining"])
console.log(items)

