var to = {};
// sleep(1000)
// if (!requestScreenCapture()) {
//     toast("请求截图失败");
//     exit();
// }

var getMap = require('./getMap.js');

to.get = function (path){
    sleep(500)
    //var getMap = require('./getMap.js');
    //var getMap = require(js);
    //let imagePath = './暴走英雄坛图片库/游戏登录/1.png';
    let imagePath = path
    let scale = 0.80
    try{
        let result = getMap.matchImage(imagePath, scale);
        if (result){
            return true
        }else{
            toast("未找到")
            return false
        }
    }catch(error){
        log(error.message)
    }
}
to.click = function (path){
    sleep(500)
    //var getMap = require('./getMap.js');
    //var getMap = require(js);
    //let imagePath = './暴走英雄坛图片库/游戏登录/1.png';
    let imagePath = path
    let scale = 0.80
    try{
        let result = getMap.matchImage(imagePath, scale);
        if (result){
            click(result.x,result.y)
            return true
        }else{
            toast("未找到")
            return false
        }
    }catch(error){
        log(error.message)
    }
}
to.clickS = function (index, images) {
    if (index >= images.length) {
        toastLog("所有点击操作成功");
        return true; // 所有操作完成
    }
    let image = images[index];
    //log(image)
    let result = to.click(image);

    if (!result) {
        toastLog(`点击失败，重试`);
        return to.clickS(index, images); // 重试当前操作
    } else {
        toastLog(`点击成功`);
        //log(an)
        while(true){
            if(to.get(image)){
                toastLog(`检测到还是原页面，开始重试`);
                if (to.click(image)){
                    log("重试成功！")
                }else{
                    toastLog(`重试失败，再来一次`);
                    return to.clickS(index, images);
                }
            }else{
                break
            }
        }
        return to.clickS(index + 1, images); // 继续下一个操作
    }
}
to.click_xiaoditu = function (path){
    sleep(random(300, 1000))
    //var getMap = require('./getMap.js');
    //var getMap = require(js);
    //let imagePath = './暴走英雄坛图片库/游戏登录/1.png';
    let imagePath = path
    let scale = 0.80
    try{
        let result = getMap.result(imagePath, scale);
        if (result){
            click(result.x,result.y)
            return true
        }else{
            toast("未找到")
            return false
        }
    }catch(error){
        log(error.message)
    }
}
to.clickone = function (images) {
    let image = images;
    let result = to.click(image);
    if (!result) {
        toastLog(`点击失败，重试`);
        return to.clickone(images); // 重试当前操作
    } else {
        toastLog(`点击成功`);
        while(true){
            if(to.get(image)){
                toastLog(`检测到还是原页面，开始重试`);
                if (to.click(image)){
                    log("重试成功！")
                }else{
                    toastLog(`重试失败，再来一次`);
                    return to.clickone(images);
                }
            }else{
                break
            }
        }
        return true
    }
}
module.exports = to;
