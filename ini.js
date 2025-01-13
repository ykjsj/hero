var ini = {};
ini.get = function getScreenCapture(){
    let Thread = threads.start(function(){
        if(auto.service != null){  //如果已经获得无障碍权限
                //由于系统间同意授权的文本不同&#xff0c;采用正则表达式
                let Allow = textMatches(/(允许|立即开始|统一)/).findOne(10*1000);
                if(Allow){
                    Allow.click();
                }
        }
    });
    if(!requestScreenCapture()){
        log("请求截图权限失败");
        return false;
    }else{
        Thread.interrupt()
        log("已获得截图权限");
        return true;
    }
}
module.exports = ini;

