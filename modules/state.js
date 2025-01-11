var state = {};
var getView = require('./getView.js');
var ocr = require('./ocr.js');
state.login = function(){
    var get_login_close_png = './暴走英雄坛图片库/游戏登录/close.png'
    let gg = "游戏公告"
    while(true){
            var th =ocr.get(gg)
            if(th){
                break
            }  
        }
        var images = [
            get_login_close_png
        ];
        getView.clickS(0,images)
    ocr.click("进入游戏")
}
state.get = function(){
    const ztai = [
        "练武木",
        "打坐中"
    ];
    let e = ocr.getInone(ztai)
    if(e){
        log("成功检测到挂机状态",e)
        if (e.includes("练武")){
            log("检测到目前正在打木桩")
            var get_4 = path + '/页面图标/打桩返回.png';
            var y = getView.click(get_4)
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
        }else if(e.includes("打坐")){
            log("检测到目前正在打坐")
            var get_4 = path + '/页面图标/打桩返回.png';
            var c = [get_4];
            var x = getView.clickS(0,c)
            if (x){
                log("成功点击返回")
            }else{
                log("未能点击返回")
            }
        }
    }
    log("目前没有挂机，正在识别地图。。。")
    if(ocr.get("滑动")){
        const maP = [
            "平安镇中心",
            "平安镇东",
            "平安镇东郊",
            "迷失的世界",
            "太极山脚",
            "大雪山脚",
            "浴血道",
            "平安新村",
            "家"
        ];
        let b = ocr.getSone(maP)
        if(b){
            log("识别成功:",b)
            return b
        }else{
            log("识别失败")
            re
        }
    }else{
        log("目前不是地图界面")
        return false
    }
}
module.exports = state;