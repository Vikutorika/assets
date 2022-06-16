import Swal from 'sweetalert2'if (window.location.pathname.includes("CTF")) {
  // var response = confirm(
  //   "看起来您正在访问CTF相关内容\n请注意：所有未经允许的入侵均违法！！！\n您是否已经理解在进行CTF相关操作时需要遵守相关的法律法规？\n如果您已经理解，请点击确定按钮，否则点击取消返回首页！"
  // );
  // if (response) {
  //   undefined;
  // } else {
  //   window.location = window.location.origin;
  // }
  // swal("CTF内容警告","看起来您正在访问CTF相关内容\n请注意：所有未经允许的入侵均违法！！！\n您是否已经理解在进行CTF相关操作时需要遵守相关的法律法规？\n如果您已经理解，请点击确定按钮，否则点击取消返回首页！")
  Swal({
    title: "CTF内容阅读警告",
    text: "看起来您正在访问CTF相关内容\n请注意：<font color=#FF0000>所有未经允许的入侵均违法！！！</font>\n您是否已经理解在进行CTF相关操作时需要遵守相关的法律法规？\n如果您已经理解，请点击'我已理解'按钮，否则点击'返回首页'按钮返回！",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#8E8CD8",
    confirmButtonText: "我已理解",
    cancelButtonText: "返回首页",
    closeOnConfirm: true,
    closeOnCancel: false,
  }).then(function (isConfirm) {
    if (isConfirm) {
      undefined;
    } else {
      window.location = window.location.origin;
    }
  });
}
