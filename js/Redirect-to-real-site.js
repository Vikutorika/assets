var domain = document.domain;
if (domain != 'localhost' & domain != 'bili33.top' & domain != '127.0.0.1'){ // localhost & 127.0.0.1 for local debugging, bili33.top is my domain
    var pathname = window.location.pathname;
    window.location=('http://bili33.top'+pathname);
}
// Fucking fake website that use my source code to deploy yours
// 去你的直接拿我的网站源码去部署你们所谓的**自己的站点**