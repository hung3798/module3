// let free: boolean = true;
// free = false;
// console.log(free);
//
// let score: number = 1000;
// console.log(score);
//
// let element: string = "pham thai hung";
//
// console.log(element);
//
// let arrNumber: Array<number> = [1, 3, 5, 234, 5];
// console.log(arrNumber);
//
// let arrString: string[] = ["phamthaihung", "lengochuy", "phamthichienthang"];
// console.log(arrString);
//
// arrString.push("nguyen thi lieu");
//
// console.log(arrString);
//
// let x: [string, number, boolean];
//
// x = ["hello", 19, true];
//
// console.log(x);
//
// enum STATUS {CREATE = 100, PROCESS, FINISH};
//
// let todoStatus: STATUS = STATUS.CREATE   ;
//
// console.log(todoStatus);
//
const categories: Array<string> = ['phamthaihung', 'lengochuy', 'lethanhthien'];
// console.log(categories);
//
// for (let i = 0; i < categories.length ; i++) {
//     console.log(categories[i]);
// }
//
// for (const categoriesKey in categories) {
//     console.log(categoriesKey);
// }
//
// for (const categoriesKey in categories) {
//     console.log(categories[categoriesKey]);
// }
//
// for (const category of categories) {
//     console.log(category);
// }

categories.forEach(element => {
    console.log(element);
})

