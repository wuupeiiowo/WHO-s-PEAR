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
