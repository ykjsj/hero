if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
var superMario = images.read("./img.png");
var mario = images.read("./123.png");
var point = findImage(superMario, mario);
toastLog(point);
click(point.x, point.y)
superMario.recycle();
mario.recycle();