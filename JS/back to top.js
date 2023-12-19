$(function() {
    var $win = $(window);
    var $backToTop = $('.back-to-top');

    $win.scroll(function() {
        // 当页面滚动到一定程度时显示 "back-to-top" 按钮
        if ($win.scrollTop() > $win.height() / 2) {
            $backToTop.show();
        } else {
            $backToTop.hide();
        }
    });

    $backToTop.click(function() {
        // 在回到顶部时添加动画效果
        $('html, body').animate({
            scrollTop: 0
        }, 1000); // 1000 毫秒，即 1 秒
    });
});