launch("com.maple.madherogo");
sleep(1000)
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
path = './暴走英雄坛图片库'
//var get_game_png = path + '/游戏登录/1.png';
var get_login_close_png = path + '/游戏登录/close.png';
//var get_1 = path + '/游戏登录/选择区服.png'
//var get_2 = path + '/游戏登录/游戏区服/混11.png'
var get_3 = path + '/游戏登录/进入.png'
var n = require('./getView.js');
var n2 = require('./modules/detect.js');
var n3 = require('./modules/ocr.js');
let gg = "游戏公告"
while(true){
    var th =n3.get(gg)
    if(th){
        break
    }  
}

var images = [
    get_login_close_png,
    get_3
];
n.clickS(0,images)
// var get_4 = './暴走英雄坛图片库/地图位置判断/打木桩中.png';
// var th = n2.get(get_4)
// if (th){
//     log("检测到目前正在打木桩")
// }else{
//     log("未识别到打木桩")
// }

let mz = '练武木桩'
var th = n3.get(mz)

//sleep(3000)
//n3.get('123')
if (th){
    log("检测到正在打桩")
    //暴走英雄坛图片库\页面图标
    var get_4 = path + '/页面图标/打桩返回.png';
    var i = [get_4];
    var y = n.clickS(0,i)
    if(y){
        log("成功点击返回")
        var th2 = n3.click("暂时离开")
        if (th2){
            log("成功点击")
        }else{
            log("失败")
        }
    }else{
        log("未能点击返回")
    }
}else{
    log("未识别到打桩")
}