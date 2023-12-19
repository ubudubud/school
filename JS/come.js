$(document).ready(function () {
    $(window).scroll(function () {
        $(".card-item").each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll + windowHeight > position) {
                $(this).addClass("visible");
            }
        });
    });
});

// .index-nature
$(document).ready(function () {
    $(window).scroll(function () {
        $(".index-nature").each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll + windowHeight > position) {
                $(this).addClass("visible");
            }
        });
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        $(".yt-list").each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll + windowHeight > position) {
                $(this).addClass("visible");
            }
        });
    });
});

//.blog-wrap
$(document).ready(function () {
    $(window).scroll(function () {
        $(".blog-wrap").each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll + windowHeight > position) {
                $(this).addClass("visible");
            }
        });
    });
});

//.main-aboutus
$(document).ready(function () {
    $(window).scroll(function () {
        $(".main-aboutus").each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll + windowHeight > position) {
                $(this).addClass("visible");
            }
        });
    });
});