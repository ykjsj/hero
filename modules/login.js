if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
sleep(2000)
let pos = findMultiColors(captureScreen(),"#bc8282",[[14,0,"#b39092"],[25,12,"#f1dbd0"],[-3,14,"#d5a5a0"],[22,25,"#fee9e1"]]);
if (pos){
    click(pos.x, pos.y)
    //toastLog("找到目标，脚本结束");
    log("暴走游戏坛 位置", pos);
}
sleep(500)
//"#e6ce9c",[[343,1,"#e6c69c"],[23,35,"#dec68c"],[357,31,"#e6ca9c"],[72,6,"#e6ce9c"]],{region:[293,705,457,135],threshold:[26]}

while (true) {
    let pos2 = findMultiColors(captureScreen(),"#e6ce9c",[[343,1,"#e6c69c"],[23,35,"#dec68c"],[357,31,"#e6ca9c"],[72,6,"#e6ce9c"]]);
    if (pos2){
        click(pos2.x, pos2.y)
        //toastLog("找到目标，脚本结束");
        log("区服 位置", pos2);
        break
    }
}

