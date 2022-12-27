
/* 햄버거에 마우스 호버 시 */
$(document).ready(function(){
    $(".hamburger").hover(function(){
        $('#menu').attr('src', 'images/market/ch_hamburger.png');
        $('#test_cates').css('display', 'block');
    })
})
/* 햄버거에서 마우스 떠날 시 */
$(document).ready(function(){
    $(".hamburger").mouseleave(function(){
        $('#menu').attr('src', 'images/market/hamburger.png');
        $('#test_cates').css('display', 'none');
    })
})


/* 대분류 메뉴 호버 시*/
$(document).ready(function(){
    $("#test_cates").hover(function(){
        $('#test_cates').css('display', 'block');
    })
})
/* 대분류 메뉴 떠날 시 */
$(document).ready(function(){
    $("#test_cates").mouseleave(function(){
        $('#test_cates').css('display', 'none');
    })
})


/* 대분류 */
/* 의류에 호버 시 */
$(document).ready(function(){
    $("#clothes").hover(function(){
        $('#test_clos').css('display', 'block');
        $('#test_cates > h2 > span').css('display', 'block');
    })
})
/* 의류에서 떠날 시 */
$(document).ready(function(){
    $("#clothes").mouseleave(function(){
        $('#test_clos').css('display', 'none');
        $('#test_cates > h2 > span').css('display', 'none');
    })
})
/* 악세서리에 호버 시 */
$(document).ready(function(){
    $("#acc").hover(function(){
        $('#test_accs').css('display', 'block');
        $('#test_cates > h2 > span').css('display', 'block');
    })
})
/* 악세서리에서 떠날 시 */
$(document).ready(function(){
    $("#acc").mouseleave(function(){
        $('#test_accs').css('display', 'none');
        $('#test_cates > h2 > span').css('display', 'none');
    })
})


/* 소분류 표시 */
$(document).ready(function(){
    $("#test_clos").hover(function(){
        $('#test_cates').css('display', 'block');
        $('#test_clos').css('display', 'block');

        $('#test_accs').css('display', 'none');

        $('#test_cates > h2 > span').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#test_clos").mouseleave(function(){
        $('#test_cates').css('display', 'block');
        $('#test_clos').css('display', 'none');

        $('#test_accs').css('display', 'none');
    })
})


$(document).ready(function(){
    $("#test_accs").hover(function(){
        $('#test_cates').css('display', 'block');
        $('#test_accs').css('display', 'block');

        $('#test_clos').css('display', 'none');

        $('#test_cates > h2 > span').css('display', 'block');
    })
})
$(document).ready(function(){
    $("#test_accs").mouseleave(function(){
        $('#test_cates').css('display', 'block');
        $('#test_clos').css('display', 'none');

        $('#test_accs').css('display', 'none');
    })
})