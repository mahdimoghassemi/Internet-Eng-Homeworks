let max_time = 90,
    second, true_counter = 0;
end_time = false;
let input_word, word_container;
const words = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December", "Apple", "Banana", "Orange", "Pineapple",
    "Coconut", "Pen", "Pencil", "Notebook", "Paper", "Car", "Boat", "Airplane",
    "Bicycle", "Ship", "Cat", "Dog", "Mouse", "Horse", "Chicken", "Donkey",
    "Xylophone", "Guitar", "Violin", "Blue", "Green", "Red", "Purple", "White"
];

function timer() {
    if (max_time >= 0) {
        if (max_time >= 60) {
            second = max_time - 60;
            let time = document.querySelector('.time');
            time.textContent = "1:" + (second < 10 ? "0" : "") + second;
        } else {
            let time = document.querySelector('.time');
            time.textContent = "0:" + (max_time < 10 ? "0" : "") + max_time;
        }
        max_time = max_time - 1;
        setTimeout('timer()', 1000);
    } else {
        end_time = true;
    }
}

timer();

function main() {

    let random_number = Math.floor(Math.random() * (words.length));
    let word = document.querySelector('.word_container');
    word.innerHTML = words[random_number];
    let input = document.querySelector('.inputWord');


    input.addEventListener('input', function(e) {
        // console.log(e.target.value);
        // console.log(words[random_number]);
        if (e.target.value.toLowerCase() === words[random_number].toLowerCase()) {
            words.splice(random_number, 1);
            // console.log(1);
            true_counter += 1;
            random_number = Math.floor(Math.random() * (words.length));
            let word = document.querySelector('.word_container');
            word.innerHTML = words[random_number];
            e.target.value = "";
        }
        // console.log(end_time);

        if (end_time || words.length === 0) {
            alert(`Your score is ${true_counter}`);
            location.reload();
        }
    });
}

main();