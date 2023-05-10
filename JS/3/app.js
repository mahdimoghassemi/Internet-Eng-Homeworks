let word;
let input_word, word_container;
const words = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December", "Apple", "Banana", "Orange", "Pineapple",
    "Coconut", "Pen", "Pencil", "Notebook", "Paper", "Car", "Boat", "Airplane",
    "Bicycle", "Ship", "Cat", "Dog", "Mouse", "Horse", "Chicken", "Donkey",
    "Xylophone", "Guitar", "Violin", "Blue", "Green", "Red", "Purple", "White"
];

let init = function() {
    input_word = document.querySelector('.inputWord');
    word_container = document.querySelectorAll('.word_container');

}

init();

word = words[0];
word_container.textContent = word;

input_word.addEventListener('input', function(e) {
    if (word === e.target.value.toLowerCase()) {}
});