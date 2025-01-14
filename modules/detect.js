var detectMap = {};
detectMap.get = function (path){
    var getMap = require('./getMap.js');
    let imagePath = path
    let scale = 0.80
    let result = getMap.matchImage(imagePath, scale);
    if (result){
        return true
    }else{
        toast("未找到")
        return false
    }
}
detectMap.dy = function (){
    let capture = captureScreen();
    let sceneFeatures = $images.detectAndComputeFeatures(capture);
    sleep(random(300, 1000))
    let capture2 = captureScreen(); // 第二张截图
    let sceneFeatures2 = $images.detectAndComputeFeatures(capture2);
    let result = $images.matchFeatures(sceneFeatures, sceneFeatures2)
    if (result) {
        log("找到拉")
        sceneFeatures.recycle();
        sceneFeatures2.recycle();
        return true
    } else {
        log('没找到哦')
        sceneFeatures.recycle();
        sceneFeatures2.recycle();
        return false
    }
}
module.exports = detectMap;