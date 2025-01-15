var mydefine = require('./ini.js');
mydefine.get()
var getView = require('./modules/getView.js');
var ocr = require('./modules/ocr.js')
var dianji = require('./modules/dianji.js')

ocr.click('绝招')
while(true){
    ocr.click('放血')
    if(ocr.get('放血')){
        continue
    }
    break
}
