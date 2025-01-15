"auto";
path = './暴走英雄坛图片库'

launch("com.maple.madherogo");
sleep(1000)
var mydefine = require('./ini.js');
mydefine.get()

var map = '';
// 调用初始化方法
var getView = require('./modules/getView.js');
//var raPng = require('./modules/ramPng.js');
var ocr = require('./modules/ocr.js');
var state = require('./modules/state.js');
var detect = require('./modules/detect.js')
var dianji = require('./modules/dianji.js')

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
var get_xdtsb1 = './暴走英雄坛图片库/小地图识别/2.png'
var get_xdtsb2 = './暴走英雄坛图片库/小地图识别/驿站.png'
var get_xdtsb3 = './暴走英雄坛图片库/小地图识别/3.png'
var get_xdtsb5 = './暴走英雄坛图片库/小地图识别/5.png'
var get_xdtclo = './暴走英雄坛图片库/小地图识别/close.png'
var get_cjm = './暴走英雄坛图片库/小地图识别/出家门.png'
var g1 = path + '/小地图识别/4.png';
var daMap1 = './暴走英雄坛图片库/大地图识别/大寻路1.png'
var daMap2 = './暴走英雄坛图片库/大地图识别/大寻路2.png'
var daMap3 = './暴走英雄坛图片库/大地图识别/大寻路3.png'
var daMap4 = './暴走英雄坛图片库/大地图识别/大寻路4.png'
var get_ddtsb1 = './暴走英雄坛图片库/大地图识别/大地图宝箱寻路1.png'
var get_ddtsb1_2 = './暴走英雄坛图片库/大地图识别/大地图宝箱寻路2.png'
var get_ddtsb1_3 = './暴走英雄坛图片库/大地图识别/大地图宝箱寻路3.png'
var get_ddtsb1_4 = './暴走英雄坛图片库/大地图识别/大地图宝箱寻路4.png'
var get_ddtsb1_5 = './暴走英雄坛图片库/大地图识别/大地图宝箱寻路5.png'
var get_ddtsb1_6 = './暴走英雄坛图片库/大地图识别/大地图宝箱寻路6.png'
var get_ddtsb1_7 = './暴走英雄坛图片库/大地图识别/大地图宝箱寻路7.png'
var get_ddtsb2 = './暴走英雄坛图片库/大地图识别/宝箱.png'
var get_ddtsb3 = './暴走英雄坛图片库/大地图识别/2.png'
var get_cjm_2 = './暴走英雄坛图片库/地图标志物/出家门.png'
var images = [
    get_xdtsb1,
    get_xdtclo
];
let task = 0
while(true){
    if (nh == '平安镇中心'){
        while(true){
            break
        }
        ocr.click(nh)
        sleep(random(300, 1000))
        //random(153, 238), random(948, 1089), random(172, 218), random(920, 1027)
        swipe(random(153, 238), random(948, 1089), random(683, 719), random(920, 1027),random(800, 1027))
        //swipe(200, 1000, 700, 1000, 1000);
        getView.click(get_xdtsb1)
        getView.clickone(get_xdtclo)
        var get_png_2 = './暴走英雄坛图片库/地图标志物/告示牌.png'
        var ggg = path + '/页面图标/刷新.png';
        var eee = path + '/页面图标/2.png';
        var lll = path + '/页面图标/close.png';
        while(true){
            if(getView.click(get_png_2)){
                while(true){
                    if(getView.get(ggg)){
                        break
                    }
                    if(getView.get(lll)){
                        getView.click(lll)
                    }
                    if(getView.get(get_png_2)){
                        getView.click(get_png_2)
                    }
                    break
                }
                
                log("成功点击告示牌")
                while(true){
                    if(ocr.get('聊天')){
                        continue
                    }
                    if(!ocr.get('民间传闻')){
                        log('=======================================')
                        if(ocr.get('宝箱')||ocr.get('世界区域')){
                            task = 1
                            log("识别到宝箱任务")
                        }else if(ocr.get('镖局')){
                            task = 2
                            log('识别到运镖任务')
                        }else if(ocr.get('四大恶人')){
                            task = 3
                            log('识别到四大恶人任务')
                        }else if(ocr.get('迷失的世界')){
                            task = 4
                            log('识别到迷失的世界任务')
                        }else{
                            log("识别到其他任务，你去看看")
                        }
                        var g = path + '/页面图标/2.png';
                        getView.clickone(g)
                        break
                    }else{
                        getView.click(ggg)
                    }
                }
                break
            }else{
                log("未能点击告示牌")
            }
        }
        switch (task){
            case 1:
                log('进入1任务')
                ocr.click(nh)
                getView.click(get_xdtsb3)
                getView.clickone(get_xdtclo)
                t1()
                //cyz()
                baoxiang()
                dadituxunlu(daMap1,daMap2)
                baoxiang()
                dadituxunlu(daMap2,daMap3)
                baoxiang()
                dadituxunlu(daMap3,daMap4)
                baoxiang()
                // getView.click(get_ddtsb1)
                // baoxiang()
                // dadituxunlu(get_ddtsb1_2)
                // baoxiang()
                // dadituxunlu(get_ddtsb1_3)
                // baoxiang()
                // dadituxunlu(get_ddtsb1_4)
                // baoxiang()
                // dadituxunlu(get_ddtsb1_5)
                // baoxiang()
                // dadituxunlu(get_ddtsb1_6)
                // baoxiang()
                // dadituxunlu(get_ddtsb1_7)
                // baoxiang()
                break;
            case 2:
                log('进入2任务')
                var getbs = './暴走英雄坛图片库/npc/镖师.png'
                ocr.click(nh)
                //getView.click(get_xdtsb3)
                while(true){
                    getView.click(g1)
                    getView.clickone(get_xdtclo)
                    if(getView.get(getbs)){
                        continue
                    }
                    log('准备点击镖师')
                    break
                }
                while(true){
                    getView.click(getbs)
                    if(ocr.get('跳过剧情')){
                        ocr.click('跳过剧情')
                    }else if(ocr.get('拜托大侠')){
                        ocr.click(nh)
                    }else{
                        continue
                    }
                    // if (!ocr.get('拜托大侠')){
                    //     if(ocr.get('跳过剧情')){
                    //         ocr.click('跳过剧情')
                    //     }else{
                    //         continue
                    //     }
                    // }
                    log('过了点击镖师')
                    break
                }
                while(true){
                    ocr.click(nh)
                    if(getView.get(getbs)){
                        continue
                    }
                    break
                }
                ocr.click(nh)
                getView.click(get_xdtsb3)
                getView.clickone(get_xdtclo)
                cyz()
                break;
            case 3:
                log('进入任务3')
                ocr.click(nh)
                var getzz = './暴走英雄坛图片库/npc/镇长.png'
                getView.click(get_xdtsb5)
                getView.clickone(get_xdtclo)
                getView.clickone(getzz)
                ocr.click('交谈')
                while(true){
                    if(ocr.get('跳过剧情')){
                        ocr.click('跳过剧情')
                        dianji.zuoxia()
                    }else{
                        if(getView.get(getzz)){
                            break
                        }
                    }
                }
                break;
            case 4:
                log('进入任务4')
                ocr.click(nh)
                getView.click(get_xdtsb3)
                getView.clickone(get_xdtclo)
                cyz()
                getView.click(get_ddtsb3)
                while(true){
                    if(detect.dy()){
                        dianji.zhongjian()
                    }
                    if(ocr.get('跳过剧情')){
                        ocr.click('跳过剧情')
                        dianji.zuoxia()
                    }
                    
                }
                break;
            default:
                log('执行完成！！')
        }
        break
    }else{
        if (nh == '家'){
            ocr.click(nh)
            getView.click(get_cjm)
            getView.clickone(get_xdtclo)
            getView.click(get_cjm_2)
        }
        var get_png = './暴走英雄坛图片库/地图标志物/驿站.png'
        var h = getView.click(get_png)
        if(h){
            while(true){
                ocr.click('平安镇')
                if(ocr.get('平安镇中心')){
                    break
                }
            }
            nh = '平安镇中心'
        }else{
            log("未能点击驿站")
            break
        }
    }
}

log("脚本完成！！！")

function dadituxunlu(thing,thing2){
    while(true){
        if(detect.dy()){
            getView.click(thing)
            if(!getView.get(thing2)){
                continue
            }
            break
        }
    }
}

function baoxiang(){
    while(true){
        if(detect.dy()){
            if(getView.get(get_ddtsb2)){
                getView.clickone(get_ddtsb2)
                log("成功点击宝箱")
            }else{
                log('没有识别到宝箱')
            }
            break
        }
    }
}
function t1(){
    while(true){
        var get_png = './暴走英雄坛图片库/地图标志物/驿站.png'
        var hh = getView.click(get_png)
        if (hh){
            log("成功点击驿站")
            while(true){
                if(ocr.click('雪焰岛')){
                    var get_pn = './暴走英雄坛图片库/地图标志物/雪焰岛出口.png'
                    while(true){
                        getView.click(get_pn)
                        if(ocr.get('雪焰岛')){
                            continue
                        }
                        while(true){
                            if(!ocr.get('迷失的世界')){
                                continue
                            }
                            swipe(700, 1000, 700, 1500, 300);
                            break
                        }
                        break
                    }
                    break
                }
            }
            break
        }else{
            log("没有点击驿站")
        }
    }
}
function cyz(){
    while(true){
        var get_png = './暴走英雄坛图片库/地图标志物/驿站.png'
        var hh = getView.click(get_png)
        if (hh){
            log("成功点击驿站")
            while(true){
                if(ocr.click('太极山')){
                    var get_pn = './暴走英雄坛图片库/地图标志物/太极山出口.png'
                    while(true){
                        getView.click(get_pn)
                        if(ocr.get('太极山')){
                            continue
                        }
                        // swipe(700, 1000, 700, 1500, 400);
                        break
                    }
                    break
                }
            }
            break
        }else{
            log("没有点击驿站")
        }
    }
}


// if(!getView.get(ggg)){
//     getView.clickone(get_png_2)
//     while(true){
//         if(!getView.get(eee)){
//             ocr.click(nh)
//             //sleep(random(300, 1000))
//             //random(153, 238), random(948, 1089), random(172, 218), random(920, 1027)
//             swipe(random(153, 238), random(948, 1089), random(683, 719), random(920, 1027),random(800, 1027))
//             //swipe(200, 1000, 700, 1000, 1000);
//             getView.click(get_xdtsb1)
//             getView.clickone(get_xdtclo)
//             getView.click(get_png_2)
//         }else{
//             break
//         }
//     }
// }