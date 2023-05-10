let first_number, second_number, button;
let first, second, result;

let init = function() {
    first_number = document.querySelector('.first_number');
    second_number = document.querySelector('.second_number');
    result = document.querySelector('.result');
    button = document.querySelector('.btn_select');
}

init();

first_number.addEventListener('input' , function(e) {
    first = Number(e.target.value);
})

second_number.addEventListener('input' , function(e) {
    second = Number(e.target.value);
})


button.addEventListener('click' , function(e) {
    result.textContent = first*second;
})
