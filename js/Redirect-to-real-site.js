var domain = document.domain;
if (domain != 'localhost' & domain != 'bili33.top' & domain != '127.0.0.1'){ // localhost & 127.0.0.1 for local debugging, bili33.top is my domain
    var pathname = window.location.pathname;
    window.location=('http://bili33.top'+pathname);
}
else {
    console.log('[GamerNoTitle] 你正在访问GamerNoTitle的小站，请注意，某些站点直接使用了本站在Github用作备份的源码进行部署，并且直称其为**原创作者**，请勿相信！请认真本站点https://bili33.top！')
}

// Fucking fake website that use my source code to deploy yours
// 去你的直接拿我的网站源码去部署你们所谓的**自己的站点**