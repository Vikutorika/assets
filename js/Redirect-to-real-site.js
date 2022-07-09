var domain = document.domain;
if (
  (domain != "localhost") &
  (domain != "bili33.top") &
  (domain != "127.0.0.1")
) {
  // localhost & 127.0.0.1 for local debugging, bili33.top is my domain
  if (domain == "webcache.googleusercontent.com") {
    usecached = confirm(
      "It seems that you are accessing a cached page. Do you want to redirect to the real-time site?"
    );
    if (usecached) {
      window.location.href = "http://bili33.top/";
    }
  } else {
    alert(
      "看起来您正在访问的网页 " +
        window.location.href +
        " 并非官方网页，有可能您正在访问Demo站，我们将为您跳转到原网站。"
    );
    var pathname = window.location.pathname;
    window.location = "http://bili33.top" + pathname;
  }
}
// Fucking fake website that use my source code to deploy yours
// 去你的直接拿我的网站源码去部署你们所谓的**自己的站点**
