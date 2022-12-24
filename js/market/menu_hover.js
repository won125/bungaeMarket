
/* 햄버거에 마우스 호버 시 */
$(document).ready(function(){
    $(".hamburger").hover(function(){
        $('#menu').attr('src', 'images/market/ch_hamburger.png');
        $('#main_menu').css('display', 'block');
    })
})
/* 햄버거에서 마우스 떠날 시 */
$(document).ready(function(){
    $(".hamburger").mouseleave(function(){
        $('#menu').attr('src', 'images/market/hamburger.png');
        $('#main_menu').css('display', 'none');
    })
})


/* 대분류 메뉴 호버 시*/
$(document).ready(function(){
    $("#main_menu").hover(function(){
        $('#main_menu').css('display', 'block');
    })
})
/* 대분류 메뉴 떠날 시 */
$(document).ready(function(){
    $("#main_menu").mouseleave(function(){
        $('#main_menu').css('display', 'none');
    })
})


/* 대분류 */
/* 의류에 호버 시 */
$(document).ready(function(){
    $("#clothes").hover(function(){
        $('#sub_menu_clothes').css('display', 'block');
        $('#main_menu > h2 > span').css('display', 'block');
    })
})
/* 의류에서 떠날 시 */
$(document).ready(function(){
    $("#clothes").mouseleave(function(){
        $('#sub_menu_clothes').css('display', 'none');
        $('#main_menu > h2 > span').css('display', 'none');
    })
})
/* 악세서리에 호버 시 */
$(document).ready(function(){
    $("#acc").hover(function(){
        $('#sub_menu_acc').css('display', 'block');
        $('#main_menu > h2 > span').css('display', 'block');
    })
})
/* 악세서리에서 떠날 시 */
$(document).ready(function(){
    $("#acc").mouseleave(function(){
        $('#sub_menu_acc').css('display', 'none');
        $('#main_menu > h2 > span').css('display', 'none');
    })
})


/* 소분류 표시 */
$(document).ready(function(){
    $("#sub_menu_clothes").hover(function(){
        $('#main_menu').css('display', 'block');
        $('#sub_menu_clothes').css('display', 'block');

        $('#sub_menu_acc').css('display', 'none');

        $('#main_menu > h2 > span').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#sub_menu_clothes").mouseleave(function(){
        $('#main_menu').css('display', 'block');
        $('#sub_menu_clothes').css('display', 'none');

        $('#sub_menu_acc').css('display', 'none');
    })
})


$(document).ready(function(){
    $("#sub_menu_acc").hover(function(){
        $('#main_menu').css('display', 'block');
        $('#sub_menu_acc').css('display', 'block');

        $('#sub_menu_clothes').css('display', 'none');

        $('#main_menu > h2 > span').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#sub_menu_acc").mouseleave(function(){
        $('#main_menu').css('display', 'block');
        $('#sub_menu_clothes').css('display', 'none');

        $('#sub_menu_acc').css('display', 'none');
    })
})