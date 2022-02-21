$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").find("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").find("span").removeClass('fa-pause');
            $("#carouselButton").find("span").addClass('fa-play');
        }
        else if ($("#carouselButton").find("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").find("span").removeClass('fa-play');
            $("#carouselButton").find("span").addClass('fa-pause');                    
        }
    });

    $("#loginButton").click(function(){
        $("#loginModal").modal();
    });

    $("#reserveButton").click(function(){
        $("#reserveModal").modal();
    });
});
