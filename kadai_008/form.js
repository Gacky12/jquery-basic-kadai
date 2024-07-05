$(function() {
    // class属性がbtnの要素がクリックされたら
    $('.btn').on('click', function() {
        // テキストボックスへ「クリックしました！」と表示
        $('.text-box').val("クリックしました！");
    });
});