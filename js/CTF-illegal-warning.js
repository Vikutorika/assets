if (window.location.pathname.includes('CTF')) {
var response = confirm('看起来您正在访问CTF相关内容\n请注意：所有未经允许的入侵均违法！！！\n您是否已经理解在进行CTF相关操作时需要遵守相关的法律法规？\n如果您已经理解，请点击确定按钮，否则点击取消返回首页！')
if (response) {
    undefined;
}
else {
    window.location = '//' + document.domain;
}
}