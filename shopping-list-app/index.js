'use strict';

function template(item) {
  return `
    <li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
}

function addItem() {
  // This function will add an item to the list
  $('form').on('click', 'button', function(e) {
    e.preventDefault();
    let item = $('.js-shopping-list-entry').val();
    // console.log(template(item));
    $('.shopping-list').append(template(item));
  });
}

function toggleCheck() {
  // This function will toggle the check on and off
  $('ul').on('click', '.shopping-item-toggle', function(e) {
    let checked = 'shopping-item__checked';
    $(e.target).closest('li').find('.shopping-item').toggleClass(checked);
    // console.log($(this));
  });
}

function removeItem() {
  // This function will remove an item from the shopping list
  $('ul').on('click', '.shopping-item-delete', function(e) {
    $(e.target).closest('li').remove();
    // console.log($(this));
  });
}

function main() {
  addItem();
  toggleCheck();
  removeItem();
}

$(main);