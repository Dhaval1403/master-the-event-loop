export const str = `
function customFunc(){
    console.log('Just a simple test')
}

customFunc();

setTimeout(function () {
    console.log('Callback function test')
});

fetch('https://example.com')
    .then(function(){
        console.log('And another test')
    });

console.warn('Test Console warn');
console.log('Test Console log');
console.error('Test Console error');
console.time('Test Console time');
console.time('Test Console info');

`