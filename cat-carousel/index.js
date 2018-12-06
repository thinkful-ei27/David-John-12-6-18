'use strict';

// We need to add an event listener for a thumbnail click
// We need a function that replaces the hero image

function replaceHeroImage(src, alt) {
  // This should take attributes and replace the img src and alt in the hero
  $('.hero img').attr('src', src).attr('alt', alt);
}

function catClick() {
  $('.thumbnails').on('click', 'a', function(e) {
    let src = $(e.target).attr('src');
    let alt = $(e.target).attr('alt');
    replaceHeroImage(src, alt);
  });
}

function allFunctions() {
  // Used to invoke all functions
  catClick();

}

$(allFunctions);