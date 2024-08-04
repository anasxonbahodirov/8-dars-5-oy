

// const minus =document.querySelector('.minus');
// const p = document.querySelector('.text');
// const pylus = document.querySelector('.pylus');

// let count = 0

// minus.addEventListener('click', () => {
// count = count - 1
// p.textContent = count
// })




// pylus.addEventListener('click', () => {
//     count = count + 1
//     p.textContent = count
// })

let count = 0;
const counterDiv = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    count++;
    counterDiv.textContent = count;
});

decrementButton.addEventListener('click', () => {
    count--;
    counterDiv.textContent = count;
});

