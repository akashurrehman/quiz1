$(window).on("load", function() {
    $("p:hidden").show();

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

    $("p").on({
        click: function() {
            console.log("clicked over a paragraph");
        },
        mouseleave: function() {
            console.log("mouse left a paragraph");
        },
    });

    $("h1,h2,h3,h4").on({
        click: function() {
            console.log("clicked over a Heading");
        },
        mouseleave: function() {
            console.log("mouse left a Heading");
        },
    });

});