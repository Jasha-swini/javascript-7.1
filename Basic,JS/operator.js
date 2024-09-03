// Assignment Operator

// let a = 5
// let b = 2

// console.log("a + b =",a + b);
// console.log("a - b =",a - b);
// console.log("a * b =",a * b);
// console.log("a / b =",a / b);
// console.log("a % b =",a % b);
// console.log("a ** b =",a ** b);

// unary operator

// let a = 7;
// console.log("a = ", a) //7
// a++;
// console.log("a = ", a) //8
// a--;
// console.log("a = ", a) //7

// Assignment operator

let a = 5;
a %= 4 // a = a % 4
console.log(a) //1

//Comparision operator
// equal to operator

console.log(5 == 5); // true
console.log(2 == "2") //true
console.log("hello" == "HELLO") //false

    // not equal to operator
    console.log(2 != 2) //false
    console.log(2 != "2") //false
    console.log(1 != 3) //true

    // strict equal to operator
    console.log(2 === 2) //true
    console.log(2 === "2") //false

    //Logical or Operator

    // let x = 2;
    // T + T = T
    // T + F = F
    // F + T = F
    // F + F = F
    // console.log((x <  4) && (4 >= x)) //true
    // console.log((x <= 4)  && (2 == 4)) //false
    // console.log((x >= 4)  && (x == 4)) //false

    // Logical OR Operator
    //  T + T = T
    //  T + F = T
    //  F + T = T
    //  F + F = F

    let x = 2;
    console.log((x <= 4) || (4 >= x)) //true
    console.log((x <= 4) || (4 == x)) //true
    console.log((x > 4) || (4 == x)) //false

    //Logical Not operator

    console.log(!true) //false
    console.log(!(2 < 3)) //false
    
    
