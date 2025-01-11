launch("com.maple.madherogo");
// 调用初始化方法
var state = require('./modules/state.js');

path = './暴走英雄坛图片库'
//var get_game_png = path + '/游戏登录/1.png';
var get_login_close_png = path + '/游戏登录/close.png';
//var get_1 = path + '/游戏登录/选择区服.png'
//var get_2 = path + '/游戏登录/游戏区服/混11.png'
//var get_3 = path + '/游戏登录/进入.png'
let sta = state.get()
if (!sta){
    state.login();
    sta = state.get()
}
log(sta)
// n.click(get_login_close_png)
// var get_4 = './暴走英雄坛图片库/地图位置判断/打木桩中.png';
// var th = n2.get(get_4)
// if (th){
//     log("检测到目前正在打木桩")
// }else{
//     log("未识别到打木桩")
// }
