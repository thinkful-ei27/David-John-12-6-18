'use strict';

// Create an event listener for form submission
function template(item, class) {
    return `
    <div class="fizz-buzz-item ${class}">
        <span>${item}</span>
    </div>`;
}

function targetValue() {
    $('form').on('click', 'button', function(e) {
        e.preventDefault();
        let numVal = $(e.target).closest('input').val()
        console.log('Button was clicked');
        console.log(numVal);
    })
}

function invoke() {
    targetValue();
}

$(invoke);