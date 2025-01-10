var detectMap = {};
detectMap.get = function (path){
    var getMap = require('./getMap.js');
    let imagePath = path
    let scale = 0.80
    let result = getMap.matchImage(imagePath, scale);
    if (result){
        return true
    }else{
        toast("未找到")
        return false
    }
}
module.exports = detectMap;