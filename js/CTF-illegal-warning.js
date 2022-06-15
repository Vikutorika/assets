var options =  {
    content: "所有未经允许的入侵均违法！！！（点击本通知以隐藏）", // text of the snackbar
    style: "toast", // add a custom class to your snackbar
    timeout: 0, // time in milliseconds after the snackbar autohides, 0 is disabled
    htmlAllowed: true, // allows HTML as content value
    onClose: function(){ } // callback called when the snackbar gets closed.
}

if (window.location.pathname.includes('CTF')){
$.snackbar(options);
}