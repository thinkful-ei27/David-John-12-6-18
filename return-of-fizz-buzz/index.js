'use strict';

// Create an event listener for form submission
function template(item, classer) {
    return `
    <div class="fizz-buzz-item ${classer}">
        <span>${item}</span>
    </div>`;
}

function targetValue() {
    $('form').on('click', 'button', function(e) {
        e.preventDefault();
        let numVal = $('input').val();
        console.log(numVal);
    })
}

function invoke() {
    targetValue();
}

$(invoke);