
var state = {};
//var ocr = require('./ocr.js');

state.login = function(){
    var get_login_close_png = './暴走英雄坛图片库/游戏登录/close.png'
    let gg = "游戏公告"
    if (ocr.click("进入游戏")){
        log("===")
    }else{
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
        while(true){
            ocr.click("进入游戏")
            if(!ocr.get('进入游戏')){
                break
            }
        }
        

        return state.get()
    }
    
}
state.get = function(){
    const ztai = [
        "练武木",
        "内力"
    ];
    if(ocr.get("挂机状态中")){
        log("成功检测到挂机状态")
        let e = ocr.getInone(ztai)
        if(e){
            log(e)
            if (e.includes("练武")){
                log("检测到目前正在打木桩")
                var get_4 = path + '/页面图标/打桩返回.png';
                while(true){
                    if(getView.click(get_4)){
                        if (ocr.click("暂时离开")){
                            log("成功点击")
                            break
                        }else{
                            getView.click(get_4)
                            log("失败")
                        }
                    }else{
                        log("未能点击返回")
                    }
                }
            }else if(e.includes("内力")){
                log("检测到目前正在打坐")
                var get_4 = path + '/页面图标/打桩返回.png';
                var x = getView.click(get_4)
                if (x){
                    log("成功点击返回")
                    if (!getView.click(get_4)){
                        log("返回失败")
                    }
                }else{
                    log("未能点击返回")
                }
            }
        }
    }else if(ocr.get("收工")){
        ocr.click("我知道了")
    }
    
    log("目前没有挂机，正在识别地图。。。")
    let tt = ocr.get("滑动")
    if(ocr.get("任务") || tt){
        if(tt && !ocr.get('聊天')){
            log('检测到没有上滑，开始上滑')
            swipe(700, 1500, 700, 1000, 400);
            
        }
        const maP = [
            "平安镇中心",
            "平安镇东",
            "平安镇东郊",
            "迷失的世界",
            "太极山脚",
            "大雪山脚",
            "大雪山腰",
            "浴血道",
            "平安新村",
            "华山之藏",
            "万毒林",
            "雪焰岛渡口",
            "少室山脚",
            "君山广场",
            "家"
        ];
        let b = ocr.getSone(maP)
        if(b){
            log("识别成功:",b)
            return b
        }else{
            log("识别失败")
            return false
        }
    }else{
        log("目前不是地图界面")
        return false
    }
}
module.exports = state;