// localhost & 127.0.0.1 for local debugging, bili33.top is my domain
// Fucking fake website that use my source code to deploy yours
// 去你的直接拿我的网站源码去部署你们所谓的**自己的站点**
var domain = document.domain;
if (
  domain != "bili33.top" &&
  domain != "blog.ninym.top" &&
  domain != "127.0.0.1" &&
  domain != "localhost" &&
  domain != "webcache.googleusercontent.com"
) {
  // webcache.googleusercontent.com by Google Cache
  alert(
    "看起来您正在访问的网页 " +
      window.location.href +
      " 并非官方网页，有可能您正在访问Demo站，我们将为您跳转到原网站。"
  );
  var pathname = window.location.pathname;
  window.location = "http://bili33.top" + pathname;
} else {
  switch (domain) {
    case "blog.ninym.top": {
      if (localStorage.getItem("Mirror-Agreement") == null) {
        usemirror = confirm(
          "你正在访问镜像站，只有主站不可用的时候我们才推荐你访问镜像站\n按确定继续访问，或者按取消返回主站\n（确定后此提示不再弹出）"
        );
        if (usemirror) {
          localStorage.setItem("Mirror-Agreement", "true");
        }
      } else {
        break;
      }
      break;
    }
  }
}
