$(document).ready(function(){
    // tabmenu
    $(function(){
        $(".tabmenu > li > a").click(function(){
            // console.log(this)
            $(this).parent().addClass("active").siblings().removeClass("active")
        })
    })
})