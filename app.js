// $(document).ready(function () {
//
//     var setHeight = function () {
//
//         var mainHeight = $(".promotions-container").height();
//         mainHeight = $(".single-product_container").outerHeight() * 2;
//         $(".promotions-container").css("height", mainHeight);
//     }
//     console.log($(".single-product_container").outerHeight() * 2);
// });


$(document).ready(function () {


    var mainHeight = $(".promotions-container").outerHeight();
    mainHeight = $(".single-product_container").outerHeight() * 2.3;
    $(".promotions-container").css("height", mainHeight);

    console.log($(".single-product_container").outerHeight() * 2.3);


    $(".show-more_btn").click(function () {
        // $(".promotions-container").css("height", "auto");
        $(".show-more_btn").css("display", "none");
        $(".show-less_btn").css("display", "block");
        $(".promotions-container").animate({
            height: $(".promotions-container").get(0).scrollHeight
        }, 400);
        return false;
    });
    $(".show-less_btn").click(function () {
        // $(".promotions-container").css("height", "650px");
        $(".show-less_btn").css("display", "none");
        $(".show-more_btn").css("display", "block");

        $(".single-product_container").outerHeight(function () {
            $('.promotions-container').animate({
                height: mainHeight

            }, 400);
            return false;
        })
    });
});

// $(".single-product_container").outerHeight(function () {
//     return $(this).outerHeight() * 2;
//     // console.log($(this).outerHeight() *2);
// });


$(".quick-view__icon").click(function (event) {
    if (screen.width <= 540) {
        $(event.target).parents(".single-product_container").find(".popup-wrapper").css("display", "none");

    }
    else {
        $(event.target).parents(".single-product_container").find(".popup-wrapper").css("display", "block");

    }
});

$(".close-btn").click(function () {
    // $(".popup-wrapper").css("display", "none");
    $(event.target).parents(".single-product_container").find(".popup-wrapper").css("display", "none");

});


$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();
});


$('.checkbox-container').click(function(event) {
   $(event.target).parents(".btn-container").find(".unchecked").toggleClass("checked");

});