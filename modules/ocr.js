var ocr = {};
let o = $ocr.create({
    models: 'slim', // 指定精度相对低但速度更快的模型，若不指定则为default模型，精度高一点但速度慢一点
    useOpenCL: true
});
function createMLK(){
    let MLKitOCR = $plugins.load('org.autojs.autojspro.plugin.mlkit.ocr');
    let o = new MLKitOCR();
    return o
}
function createPadd(){
    let o = $ocr.create({
        models: 'slim', // 指定精度相对低但速度更快的模型，若不指定则为default模型，精度高一点但速度慢一点
        useOpenCL: true
    });
    return o
}

ocr.click = function (txt){
    sleep(500)
    //o = createMLK();
    let capture = captureScreen();
    let result = o.detect(capture);
    let r = false
    let thing = false
    result.forEach(element => {
        a = element.text
        //a == txt
        if (a.includes(txt)) {
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
        //o.release();
        return ocr.get(txt)
    }
    //o.release();
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
    sleep(500)
    //o = createMLK();
    let capture = captureScreen();
    let result = o.detect(capture);
    r = false
    thing = false
    result.forEach(element => {
        a = element.text
        //a == txt
        if (a.includes(txt)) {
            //log("成功匹配上ocr")
            r = true
        }else{
            if (a.includes('loading.') || a.includes('适龄提示') || a.includes('与服务器通讯中')){
                thing = true
            }
            //log(a)
        }
    });
    if (thing && r==false){
        //o.release();
        return ocr.get(txt)
    }
    //o.release();
    if (r){
        return true
    }else{
        return false
    }
}
ocr.getInone = function (txtArray){
    sleep(500)
    //o = createMLK();
    let capture = captureScreen();
    let result = o.detect(capture);
    r = false
    thing = false
    let text = ''
    result.forEach(element => {
        a = element.text
        //a == txt
        txtArray.forEach(txt => {
            if (a.includes(txt)) {
                log("成功匹配上 OCR: " + a);
                text = a
                r = true;
            }else{
                if (a.includes('loading.') || a.includes('适龄提示') || a.includes('与服务器通讯中')){
                    thing = true
                }
                // log(txt)
                //log("a:",a)
            }
        });
    });
    if (thing && r==false){
        //o.release();
        return ocr.getInone(txtArray)
    }
    //o.release();
    if (r){
        return text
    }else{
        return false
    }
}
ocr.getSone = function (txtArray){
    sleep(500)
    //o = createMLK();
    let capture = captureScreen();
    let result = o.detect(capture);
    r = false
    thing = false
    let text = ''
    result.forEach(element => {
        a = element.text
        //a == txt
        txtArray.forEach(txt => {
            if (a==txt) {
                log("成功匹配上 OCR: " + txt);
                text = txt
                r = true;
            }else{
                if (a == 'loading...100%' || a == 'loading....'){
                    thing = true
                }
                //log(txt)
                //log("a:",a)
            }
        });
    });
    if (thing && r==false){
        //o.release();
        return ocr.get(txt)
    }
    //o.release();
    if (r){
        return text
    }else{
        return false
    }
}
ocr.getMapname = function (index, mapName) {
    if (index >= mapName.length) {
        toastLog("所有操作成功");
        return false; // 所有操作完成
    }
    let image = mapName[index];
    let result = ocr.get(image);

    if (!result) {
        toastLog(`识别失败，开始识别下一个`);
        return ocr.getMapname(index + 1, mapName); // 重试当前操作
    } else {
        toastLog(`识别成功，继续下一个操作`);
        return mapName[index]
    }
}
events.on("exit", function(){
    o.release();
    log("释放ocr");
});
module.exports = ocr;