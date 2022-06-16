if (window.location.pathname.includes("CTF") && localStorage.getItem('CTF-Agreement') == null) {
  var response = confirm(
    "看起来您正在访问CTF相关内容\n请注意：所有未经允许的入侵均违法！！！\n您是否已经理解在进行CTF相关操作时需要遵守相关的法律法规？\n如果您已经理解，请点击确定按钮，否则点击取消返回首页！\n（本消息只会显示一次，一旦点击确定后将不再显示）"
  );
  if (response) {
    localStorage.setItem('CTF-Agreement', 'true');
  } else {
    window.location = window.location.origin;
    // window.history.back();
    // location.reload();
  }
}