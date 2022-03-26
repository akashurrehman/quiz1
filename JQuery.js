$(document).ready(function() {
    $("a").hover(function() {
        $(this).css("color", "yellow");
    }, function() {
        $(this).css("color", "");
    });
    $("i").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "");
    });
    $("h1,h2").hover(function() {
            $(this).css("color", "#A73979");
        },
        function() {
            $(this).css("color", "");
        });

    $("p").hover(function() {
        $(this).css("color", "#a4161a");
    }, function() {
        $(this).css("color", "");
    });
});

$(document).ready(function() {
    $("p:hidden").show();
});