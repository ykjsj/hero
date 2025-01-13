"nodejs";
const plugins = require('plugins');
const MLKitOCR = await plugins.load('org.autojs.autojspro.plugin.mlkit.ocr');
const ocr = new MLKitOCR();
var mario = images.read("./暴走英雄坛图片库/地图位置判断/打木桩中.png");
if(mario){
    log("111")
}else{
    log("222")
}
const result = await ocr.detect(mario);
console.log(result);