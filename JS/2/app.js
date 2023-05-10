let input_task, second_number, button;
let first, second, result;

let init = function() {
    input_task = document.querySelector('.inputTask');
    button = document.querySelector('.add-btn');
    result = document.querySelector('.result');

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
