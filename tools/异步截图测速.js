requestScreenCapture({
    async: true
});
isRunning = true;
$images.on("screen_capture", capture => {
    // 在这里执行找图找色等操作
    
});
setInterval(() => {
    if (!isRunning) {
        clearInterval(this); // 停止定时器
        exit(); // 结束脚本
    }
}, 1000);
