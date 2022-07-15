$('document').ready(function () {
  $('.slides img').click(function () {
    $('.slides .active').removeClass('active');
    $(this).addClass('active');
    var $smallImages = $(this).attr('src');
    $('.display-image img').attr('src', $smallImages);
  });

  var minusBtn = $('#minus');
  var plusBtn = $('#plus');
  var numberPlace = $('#numberPlace');
  var number = 0;
  var min = 0;

  minusBtn.click(function () {
    if (number > min) {
      number = number - 1;
      numberPlace.text(number);
    }
  });
  plusBtn.click(function () {
    number = number + 1;
    numberPlace.text(number);
  });
});
