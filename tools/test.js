if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
sleep(2000)
var n = images.read("./123.png");
if (n != null){
    var xy = images.findImageInRegion(captureScreen(), n);
    //log("图片坐标"+ str+ ","+xy)
    log("图片坐标: "+xy)
}else{
    log("找不到图片")
}
n.recycle();
click(xy.x, xy.y)