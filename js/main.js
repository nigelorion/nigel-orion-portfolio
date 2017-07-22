$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 450);


});

$(document).ready(function(){

    $('.hero_left').fadeIn(5000);

    $('.hero_divider').fadeIn(1000);
    $('.hero_right').fadeIn(3000);



});
