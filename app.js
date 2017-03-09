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
            height: '660px'
        }, 400);
        return false;
    })
});

$(".product-img").mouseover(function(event) {
    $(event.target).parents(".single-product_container").find(".popup-wrapper").css("display", "block");
    console.log("dziala cos");
});

$(".close-btn").click(function() {
    $(".popup-wrapper").css("display", "none");
});

