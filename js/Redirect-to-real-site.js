var domain = document.domain;
if (
  (domain != "localhost") &
  (domain != "bili33.top") &
  (domain != "127.0.0.1") &
  (domain != "blog.ninym.top")
) {
  // localhost & 127.0.0.1 for local debugging, bili33.top is my domain
  if (domain == "webcache.googleusercontent.com") {
    usecached = confirm(
      "It seems that you are accessing a cached page. Do you want to redirect to the real-time site?"
    );
    if (usecached) {
      window.location.href = "http://bili33.top/";
    } else {
      undefined;
    }
  }
} else if (
  domain == "blog.ninym.top" &&
  localStorage.getItem("Mirror-Agreement") == null
) {
  usemirror = confirm(
    "你正在访问镜像站，只有主站不可用的时候我们才推荐你访问镜像站\n按确定继续访问，或者按取消返回主站\n（确定后此提示不再弹出）"
  );
  localStorage.setItem("Mirror-Agreement", "true");
} else {
  alert(
    "看起来您正在访问的网页 " +
      window.location.href +
      " 并非官方网页，有可能您正在访问Demo站，我们将为您跳转到原网站。"
  );
  var pathname = window.location.pathname;
  window.location = "http://bili33.top" + pathname;
}
// Fucking fake website that use my source code to deploy yours
// 去你的直接拿我的网站源码去部署你们所谓的**自己的站点**
