function square(edge) {
    return edge * edge;
}
console.log(square(9));
function add(a) {
    return function (b) {
        return a + b;
    };
}
const addWith5 = add(5);
console.log(addWith5(3));
console.log(addWith5(15));
