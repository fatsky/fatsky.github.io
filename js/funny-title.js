// 浏览器搞笑标题
var OriginTitle = "icysky's Blog - 今日事，今日毕";
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(ฅ>ω<*ฅ) 下次还骗你 ~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});