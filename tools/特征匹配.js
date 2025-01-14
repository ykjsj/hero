// 读取小图
let hellokitty = $images.read('./宝箱.png');
// 计算小图特征
let objectFeatures = $images.detectAndComputeFeatures(hellokitty);
// 请求截图权限
requestScreenCapture();

let n = 3;
for (let i = 0; i < n; i++) {
    sleep(500);
    let capture = captureScreen();
    let start = Date.now();
    let sceneFeatures = $images.detectAndComputeFeatures(capture, {scale: 0.8});
    log(sceneFeatures.scale)
    let drawMatches = (i == n - 1 ? '/storage/emulated/0/脚本/.remote/DESKTOP-TCMBN5R/hero/matches.jpg' : undefined);
    let result = $images.matchFeatures(sceneFeatures, objectFeatures, { drawMatches });
    let end = Date.now();
    console.log(result, result ? result.center : null);
    sceneFeatures.recycle();
    toastLog(`第${i + 1}次检测: ${end - start}ms`);
}
objectFeatures.recycle();
hellokitty.recycle();