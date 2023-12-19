// Optional: 如果你想要支持暂停和恢复
var marquee = document.querySelector('.marquee');

marquee.addEventListener('mouseenter', pauseMarquee);
marquee.addEventListener('mouseleave', resumeMarquee);

function pauseMarquee() {
    marquee.style.animationPlayState = 'running';
}

function resumeMarquee() {
    marquee.style.animationPlayState = 'running';
}
