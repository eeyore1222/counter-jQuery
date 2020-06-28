// 當頁面準備完成時(jqread tap)
$(document).ready(function () {

    $(window).scroll(function () {
        // var 變數 = 資料 (joffsetget tap)
        var offset = $("#test").offset();     // 取得元素位移資料 
        var top = offset.top;                 //上方
        var left = offset.left;               //左方

        //console.log("元素的上方:"+top);

        var windowTop = $(window).scrollTop();

        //console.log("視窗的上方:"+windowTop);

        // 判斷式  如果發生甚麼事就... if (){}

        if (windowTop > top) {
            // console.log("開始執行動畫...");
            $("#test").animate({
            num : 999
            }, {
                duration: 2000,
            step: (now) => {
                    $("#test").text(Math.floor(now));     //文字(步驟)-去小數點
                }
            })
        }
    });
});