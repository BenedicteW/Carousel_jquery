$(function(){

    setInterval(function(){  
        $(".carousel ul li:first-child").fadeOut("slow", function(){  
            $(this).appendTo(".carousel ul").fadeIn();  
        });  
    }, 3000);

    $("#next").click(function() {
        $(".carousel ul li:first-child").appendTo(".carousel ul", function(){  
            $(this).fadeOut("fast");  
        });  
    });

    $("#prev").click(function() {
        $(".carousel ul li:last-child").prependTo(".carousel ul", function(){  
            $(this).fadeOut("fast");  
        });  
    });

 });