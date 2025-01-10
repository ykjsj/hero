var ocr = {};

ocr.click = function (txt){
    sleep(1000)
    let MLKitOCR = $plugins.load('org.autojs.autojspro.plugin.mlkit.ocr');
    let o = new MLKitOCR();
    let capture = captureScreen();
    let result = o.detect(capture);
    let r = false
    let thing = false
    result.forEach(element => {
        a = element.text
        if (a == txt) {
            bounds = element.bounds
            r = true
        }else{
            if (a == 'loading...100%' || a == '适龄提示' || a == 'loading....'){
                thing = true
            }
            //log(a)
        }
    });
    if (thing && r==false){
        o.release();
        return ocr.get(txt)
    }
    o.release();
    if (r){
        let randomX = random(bounds.left, bounds.right); // 在 left 和 right 之间生成随机 x
        let randomY = random(bounds.top, bounds.bottom); // 在 top 和 bottom 之间生成随机 y
        // 执行点击操作
        click(randomX, randomY);
        return r
    }else{
        return false
    }
}
ocr.get = function (txt){
    sleep(3000)
    let MLKitOCR = $plugins.load('org.autojs.autojspro.plugin.mlkit.ocr');
    let o = new MLKitOCR();
    let capture = captureScreen();
    let result = o.detect(capture);
    r = false
    thing = false
    result.forEach(element => {
        a = element.text
        if (a == txt) {
            log("成功匹配上ocr")
            r = true
        }else{
            if (a == 'loading...100%' || a == 'loading....'){
                thing = true
            }
            //log(a)
        }
    });
    if (thing && r==false){
        o.release();
        return ocr.get(txt)
    }
    o.release();
    if (r){
        return true
    }else{
        return false
    }
    
}
module.exports = ocr;