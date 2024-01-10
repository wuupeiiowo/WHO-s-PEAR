$(document).ready(function(){
    /*$(".sugar1").mouseenter(function(){
            $(this).text("糖度:12~14度");
    });
    $(".sugar2").mouseenter(function(){
        $(this).text("糖度:10.5~13度");
    });
    $(".sugar3").mouseenter(function(){
        $(this).text("糖度:12度~");
    });
    $(".sugar4").mouseenter(function(){
        $(this).text("糖度:12~13度");
    });

    $(".sugar").mouseleave(function(){
        $(this).text("糖度");
    });*/

    $(".product-item").mouseenter(function(){
        $(this).css("box-shadow","20px 15px #B4A383");
        $(this).css("transition-duration","750ms");
    });

    $(".product-item").mouseleave(function(){
        $(this).css("box-shadow","0px 0px #B4A383"); 
    });
    $(document).ready(function(){ 
        $("input").change(function(){
            if($(this).is(":checked")){
                $(".menu").attr("src", "./image/menu-close.png");
            } 
            else { 
                $(".menu").attr("src", "./image/menu-open.png");
            }
        });
    });
    });
