'use strict';

// Create an event listener for form submission
function template(item) {
    return `
    <div class="fizz-buzz-item">
        <span>${item}</span>
    </div>`;
}

function targetValue() {
    $('form').on('click', 'button', function(e) {
        e.preventDefault();
        console.log('Button was clicked');
    })
}

function invoke() {
    targetValue();
}

$(invoke);