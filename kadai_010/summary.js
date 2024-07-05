$(function () {
    
    // change-color要素をクリックした時テキストの文字色を変更
    $('#change-color').on('click', function () {
        $('#target').css('color', 'orange');
    });
    
    // change-textの要素をクリックした時テキスト内容を変更
    $('#change-text').on('click', function() {
        $('#target').text('調子はいかがですか？');
    });

    // fade-outの要素をクリックした時フェードアウトを実行
    $('#fade-out').on('click', function() {
        $('#target').fadeOut(1000);
    });

    // fade-inの要素をクリックした時フェードインを実行
    $('#fade-in').on('click', function() {
        $('#target').fadeIn(1000);
    });
});