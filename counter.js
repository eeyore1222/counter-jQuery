// 當頁面準備完成時(jqread tap)
$(document).ready(function () {

    $(window).scroll(function () {
        $("*").each(function (index, element) {
            // var 變數 = 資料 (joffsetget tap)
            var offset = $(this).offset();     // 取得元素位移資料 
            var top = offset.top;                 //上方
            var left = offset.left;               //左方

            //console.log("元素的上方:"+top);

            var windowTop = $(window).scrollTop();

            //console.log("視窗的上方:"+windowTop);

            var number = $(this).attr("data-counter-number");
            var time = $(this).attr("data-counter-time");
            var offset = $(this).attr("data-counter-offset");

            //console.log("數字:" + number);
            //console.log("時間:" + time);
            //console.log("位移:" + offset);

            // 判斷式  如果發生甚麼事就... if (){}

            if (windowTop > top - offset) {
                // console.log("開始執行動畫...");
                $(this).animate({
                    num: number                  //數字              
                }, {
                    duration: parseInt(time), //時間 - duration 需要數字 - parseInt() 將字串轉為整數
                    step: (now) => {              //步驟
                        $(this).text(Math.floor(now));     //文字(步驟)-去小數點
                    }
                })
            }
        })


    });
});