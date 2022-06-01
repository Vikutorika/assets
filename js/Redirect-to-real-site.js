var domain = document.domain;
if (domain != 'localhost' | domain != 'bili33.top'| domain != '127.0.0.1'){ // localhost & 127.0.0.1 for local debugging, bili33.top is my domain
    var pathname = window.location.pathname;
    window.location=('http://bili33.top'+pathname);
}