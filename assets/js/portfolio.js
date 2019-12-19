$(function () {
    $('#menu_label').on('click', function () {
        console.log('(・∀・)');
        $(this).removeClass('active');

        $('.nav').toggleClass('active');


    })
})