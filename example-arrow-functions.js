// var names = ['Victor', 'Liezl', 'J-L'];
//
// names.forEach(function (name) {
//    console.log('forEach', name);
// });
//
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Victor'));
//
// var person = {
//   name: 'Victor',
//   greet: function () {
//      names.forEach((name) => {
//          console.log(this.name + " blah " + name);
//      });
//   }
// };
//
// person.greet();

// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(1, 3));
// console.log(add(9, 0));

var addStatement = (a, b) => {
    return a + b;
};
var addExpress = (a, b) => a + b;
console.log(addStatement(2, 3));
console.log(addExpress(9, 0))
