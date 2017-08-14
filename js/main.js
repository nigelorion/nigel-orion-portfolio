$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 450);


});

$(document).ready(function(){

    $('.hero_left').fadeIn(3500);

    $('.hero_divider').fadeIn(800);
    $('.hero_right').fadeIn(2000);



});
