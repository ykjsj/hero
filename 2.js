var mydefine = require('./ini.js');
mydefine.get()
var dianji = require('./modules/dianji.js');
var getView = require('./modules/getView.js');
var ocr = require('./modules/ocr.js')
var sy = './暴走英雄坛图片库/操作图标/使用.png'
var mz = './暴走英雄坛图片库/操作图标/maozi.png'
var get_4 = './暴走英雄坛图片库/页面图标/打桩返回.png';
while(true){
    ocr.click('角色')
    if(!ocr.get("角色")){
        neili()
        while(true){
            ocr.click('技能')
            if(ocr.get('治疗')){
                ocr.click('治疗')
                ocr.click('疗伤')
                if(!getView.get(mz)){
                    while(true){
                        dianji.zuoxia()
                        if(ocr.get('内伤')){
                            continue
                        }
                        while(true){
                            if(ocr.get('吸气')){
                                ocr.click("吸气")
                                if(ocr.get('吸气')){
                                    continue
                                }

                            }
                            break
                        }
                        while(true){
                            if(!ocr.get('吸气')){
                                continue
                            }
                            log('过了检测生命')
                            break
                        }
                        break
                    }
                }else{
                    while(true){
                        if(!ocr.get('吸气')){
                            continue
                        }
                        log('过了检测生命')
                        break
                    }
                }
                
                
            }else{
                continue
            }
            break
        }
        neili()
        getView.clickone(get_4)
        
    }
    break
}
function neili(){
    ocr.click("物品")
    ocr.click('老白干')
    ocr.click("使用")
    if(!ocr.get("十分")){
        log('检测到内力需要补充')
        while(true){
            if(ocr.get('最大')){
                ocr.click("最大")
                log('点击了最大')
                getView.click(sy)
                log('点击了使用')
            }else{
                continue
            } 
            break
        }
        
    }
}