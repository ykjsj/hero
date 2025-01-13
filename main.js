path = './暴走英雄坛图片库'
launch("com.maple.madherogo");
sleep(1000)
var mydefine = require('./ini.js');
mydefine.get()


// 调用初始化方法
var getView = require('./modules/getView.js');
var ocr = require('./modules/ocr.js');
var state = require('./modules/state.js');


var get_login_close_png = path + '/游戏登录/close.png';
var png = path + '/游戏登录/游戏启动.png'
let nh = state.get()
if (!nh){
    log("识别是否为游戏启动")
    if(getView.get(png)){
        log("识别到为游戏启动")
        log("开始登录")
        nh = state.login();
    }else{
        log("未能识别游戏状态")
    }
}
var get_xdtsb1 = './暴走英雄坛图片库/小地图识别/每日任务.png'
var get_xdtsb2 = './暴走英雄坛图片库/小地图识别/驿站.png'
var get_xdtclo = './暴走英雄坛图片库/小地图识别/close.png'
var images = [
    get_xdtsb1,
    get_xdtclo
];
if (nh){
    ocr.click(nh)
    getView.click(get_xdtsb1)
    getView.click(get_xdtclo)
}else{
    log("未能点击每日任务")
}
if(getView.click(get_xdtsb2)){
    log("成功点击小驿站")
    sleep(1000)
    getView.click(get_xdtclo)
}
var get_png_2 = './暴走英雄坛图片库/地图标志物/告示牌.png'
if(getView.click(get_png_2)){
    log("成功点击告示牌")
}else{
    log("未能点击告示牌")
}
var get_png = './暴走英雄坛图片库/地图标志物/驿站.png'
var hh = getView.click(get_png)
if (hh){
    log("成功点击驿站")
}else{
    log("没有点击驿站")
}

