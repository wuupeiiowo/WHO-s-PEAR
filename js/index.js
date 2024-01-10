$(document).ready(function(){
    $("#about-button a").mouseenter(function(){
            $(this).css('color','#D2CABB');
            $(this).css("transition-duration","1100ms");
            $("#about-button").css("background-color" , "#3B4F19");
    });
    $("#about-button a").mouseleave(function(){
        $(this).css('color','#3B4F19');
        $("#about-button").css("background-color" , "#D2CABB");
    });

    $("#process-button a").mouseenter(function(){
        $(this).css('color','#D2CABB');
        $(this).css("transition-duration","1100ms");
        $("#process-button").css("background-color" , "#3B4F19");
    });
    $("#process-button a").mouseleave(function(){
        $(this).css('color','#3B4F19');
        $("#process-button").css("background-color" , "#D2CABB");
    }); 

    $("#product-button a").mouseenter(function(){
        $(this).css('color','#D2CABB');
        $(this).css("transition-duration","1100ms");
        $("#product-button").css("background-color" , "#3B4F19");
    });
    $("#product-button a").mouseleave(function(){
        $(this).css('color','#3B4F19');
        $("#product-button").css("background-color" , "#D2CABB");
    });

    $("input").change(function(){
        if($(this).is(":checked")){
            $(".menu").attr("src", "../image/menu-close.png");
        } 
        else { 
            $(".menu").attr("src", "../image/menu-open.png");
        }
    });

    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
        pause:'hover'
    })
    $(".pic-a").mouseenter(function(){
        $(this).css('background-color','rgba(210, 202, 187, 0.7)');
        $(this).css("transition-duration","400ms");
    });
    $(".pic-a").mouseleave(function(){
        $(this).css('background-color','initial');
    });
});