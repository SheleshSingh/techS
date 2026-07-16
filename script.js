
// const obj = {
//     name: "Amit",
//     age: 45,
//     address: {
//         line1: "line1",
//         line2: "line2",
//         // car: {
//         //     carName: "BMW",
//         //     carPrice: 5000000
//         // }
//     }
// }

// console.log(obj);

// // console.log(obj.name);
// // console.log(obj["age"]);

// console.log(obj.address.line2);

// console.log(obj.address.car.carPrice);


// const { age, name: username} = obj

// console.log(username);

// console.log(age);


// const { address: { line1, line2 } } = obj

// console.log(line1);



// const arr = ["A", "b", "c"]

// console.log(arr);

// const [data, data1] = arr

// console.log(data);


// ternary operator

// condition ? value if true : value else fase

// const num = 10

// if(num % 2 === 0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// const result = num % 2 === 0 ? "Even" : "Odd"
// console.log(result);

// true ? true : false


// const a = 10
// const b = 15

// const max = a > b ? a : b
// console.log(max);

// const marks = 80

// if(marks>= 80){
//     console.log("Pass");
// }else{
//     console.log("Fail");
// }

// const result = marks >= 80 ? "Pass" : "Fail"
// console.log(result);


// spread or rest operator

// const arr = [1, 2, 3, 4, 5]
// const arrData = ["data", "test", "Amit"]


// const arr2 = [...arr, ...arrData]
// console.log(arr2);


// const obj = {
//     name: "Ravi",
//     age: 34
// }

// const obj2 = { role: "admin", ...obj }
// console.log(obj2);


const obj = {
    name: "Dev",
    age: 45,
    role: "admin",
    salary: 50000
}

const {name, ...data} = obj 

// console.log(name);
console.log(data);