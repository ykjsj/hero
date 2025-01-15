var getbs = './暴走英雄坛图片库/npc/运镖伙计.png'
var get = './暴走英雄坛图片库/奇人异事/npc/youjianNpc.png'
var get2 = './暴走英雄坛图片库/奇人异事/有间客栈/1.png'
var mydefine = require('./ini.js');
mydefine.get()
var getView = require('./modules/getView.js');
var ocr = require('./modules/ocr.js')
var dianji = require('./modules/dianji.js')
if(ocr.get('有间')){
    while(true){
        getView.click(get)
        if(!ocr.get('跳过剧情')){
            continue
        }
        while(true){
            ocr.click('跳过剧情')
            if(getView.get(get2)){
                while(true){
                    dianji.zuoxia()
                    if(!getView.get(get2)){
                        ocr.click('跳过剧情')
                    }else{
                        continue
                    }
                    break
                }
                
            }
            break
        }
        break
    }
}

