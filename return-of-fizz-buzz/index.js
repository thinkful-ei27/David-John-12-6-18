'use strict';

// Create an event listener for form submission
function template(item, classer) {
    return `
    <div class="fizz-buzz-item ${classer}">
        <span>${item}</span>
    </div>`;
}

function fizzBuzz(num){
    if (num%15 === 0){
        return 'fizzBuzz';
    }
    else if (num%3 === 0){
        return 'fizz';
    }
    else if (num%5 === 0){
        return 'Buzz';
    }
    else {
        return num;
    }

}
console.log(fizzBuzz(15));


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