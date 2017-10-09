$(function () {
    console.log("sdf");
    // $('.scroll_top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);}); 
    $('.skill-sec').click(function () { 
        console.log("sdf"); 
        $('html,body').animate({ scrollTop: $('#skill-sec').offset().top }, 800); 
    });
    $('.down-sec').click(function () { 
        console.log("sdf"); 
        $('html,body').animate({ scrollTop: $('#down-sec').offset().top }, 800); 
    });
    $('.about-sec').click(function () { 
        console.log("sdf"); 
        $('html,body').animate({ scrollTop: $('#about-sec').offset().top }, 800); 
    });
    $('.show-sec').click(function () { 
        console.log("sdf"); 
        $('html,body').animate({ scrollTop: $('#show-sec').offset().top }, 800); 
    });
    //$('.scroll_bottom').click(function(){$('html,body').animate({scrollTop:$('.bottom').offset().top}, 800);}); 

})