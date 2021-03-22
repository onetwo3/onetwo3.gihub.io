$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<img src='images/bars-solid.svg'/>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<img src='images/times-solid.svg'/>");
        }
    });
});