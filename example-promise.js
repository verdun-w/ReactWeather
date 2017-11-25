// function getTempCallBack(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallBack('London', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });
//
// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         resolve(30);
//         reject('City not found.')
//     });
// }
//
// getTempPromise('London').then(function (temp) {
//     console.log('Promise success', temp);
// }, function (err) {
//     console.log('Promise error', err);
// });

//Challenge Area
function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('You did not give two numbers.');
        }
    })
}

addPromise(10, 6).then(function (num) {
    console.log('success', num);
}, function (err) {
    console.log('error', err);
});