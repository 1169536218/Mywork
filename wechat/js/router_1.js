


$(function(){

    // $("#title").load("../page/title/chat-title.html")
    // $("#dynamic").load("../page/dynamic/chat-records.html")



    //切换
    $(".menu-item").click(function() {
        $("#title").load($(this).data())
        $("#dynamic").load("index_2.html")

    })


})