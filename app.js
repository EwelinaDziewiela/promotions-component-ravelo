$(document).ready(function() {
    $(".show-more_btn").click(function() {
        // $(".promotions-container").css("height", "auto");
        $(".show-more_btn").css("display", "none");
        $(".show-less_btn").css("display", "block");
        $(".promotions-container").animate({
           height: $(".promotions-container").get(0).scrollHeight
        }, 400);
        return false;
    });
    $(".show-less_btn").click(function() {
        // $(".promotions-container").css("height", "650px");
        $(".show-less_btn").css("display", "none");
        $(".show-more_btn").css("display", "block");
        $('.promotions-container').animate({
            height: '490px'
        }, 400);
        return false;
    })
});

$(".quick-view__icon").click(function(event) {
    if(screen.width <= 540) {
        $(event.target).parents(".single-product_container").find(".popup-wrapper").css("display", "none");

    }
    else {
        $(event.target).parents(".single-product_container").find(".popup-wrapper").css("display", "block");

    }
});

$(".close-btn").click(function() {
    // $(".popup-wrapper").css("display", "none");
    $(event.target).parents(".single-product_container").find(".popup-wrapper").css("display", "none");

});



$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();
});