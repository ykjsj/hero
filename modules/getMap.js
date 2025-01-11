var getMap = {};


getMap.matchImage = function (imagePat, scale) {
    // 参数验证
    if (!imagePat || typeof imagePat !== 'string') {
        toastLog("图片路径无效");
        return;
    }
    if (typeof scale !== 'number' || scale <= 0) {
        toastLog("缩放比例无效");
        return;
    }

    // 读取目标图片
    let targetImage = $images.read(imagePat);
    if (!targetImage) {
        toastLog("读取目标图片失败");
        return;
    }

    // 提取目标图片特征
    let objectFeatures = $images.detectAndComputeFeatures(targetImage);
    if (!objectFeatures) {
        toastLog("提取目标图片特征失败");
        targetImage.recycle();
        return;
    }

    // 捕获屏幕
    let capture = captureScreen();
    if (!capture) {
        toastLog("捕获屏幕失败");
        objectFeatures.recycle();
        targetImage.recycle();
        return;
    }

    // 提取屏幕特征
    let start = Date.now();
    
    let sceneFeatures = $images.detectAndComputeFeatures(capture, {scale: scale});
    if (!sceneFeatures) {
        toastLog("提取屏幕特征失败");
        objectFeatures.recycle();
        targetImage.recycle();
        return;
    }

    // 匹配特征
    let result = $images.matchFeatures(sceneFeatures, objectFeatures);
    let end = Date.now();

    // 释放资源
    sceneFeatures.recycle();
    objectFeatures.recycle();
    targetImage.recycle();

    // 处理匹配结果
    if (result) {
        //toastLog(`匹配成功，耗时: ${end - start}ms`);
        const properties = [
            result.topLeft,
            result.topRight,
            result.bottomLeft,
            result.bottomRight,
            result.center
        ];
        
        // 随机选择一个属性
        const randomIndex = Math.floor(Math.random() * properties.length);
        const randomProperty = properties[randomIndex];
        
        return randomProperty;
    } else {
        toastLog("未找到匹配结果");
        return null;
    }
};




// $images.on("screen_capture", capture => {
//     // 在这里执行找图找色等操作
    
// });
// setInterval(() => {
//     if (!isRunning) {
//         clearInterval(this); // 停止定时器
//         exit(); // 结束脚本
//     }
// }, 1000);
module.exports = getMap;