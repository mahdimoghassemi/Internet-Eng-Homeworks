let input, button, add;
let input_text, count_num = 1;

let init = function() {
    button = document.querySelector('.add-btn');
    input = document.querySelector('.inputTask');
    add = document.querySelector('.add');

}

init();

// console.log(input);
input.addEventListener('input', function(e) {
    input_text = e.target.value;
    // console.log(input_text);
});

button.addEventListener('click', function(e) {

    let head = document.createElement('tr');
    add.appendChild(head);

    let count = document.createElement('td');
    count.innerHTML = count_num;
    count_num += 1;
    head.appendChild(count);

    let task_name = document.createElement('td');
    task_name.innerHTML = input_text;
    head.appendChild(task_name);

    let button_td = document.createElement('td');
    head.appendChild(button_td);

    let task_button = document.createElement('button');
    task_button.className = "btn btn-outline-primary done_btn";
    task_button.innerText = "Done";
    button_td.appendChild(task_button);
});

let done_btn = document.querySelector('.done_btn');

done_btn.addEventListener('click', function(e) {
    e.target.parentNode.remove();
});