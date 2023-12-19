$(function() {
    var $win = $(window);
    var $backToTop = $('.back-to-top');

    $win.scroll(function() {
        
        if ($win.scrollTop() > $win.height() / 2) {
            $backToTop.show();
        } else {
            $backToTop.hide();
        }
    });

    $backToTop.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});