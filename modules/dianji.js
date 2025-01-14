"auto";

var dianji = {};
dianji.zuoxia = function dianjizuoxiajiao(){
    setScreenMetrics(device.width, device.height); // 动态设置屏幕分辨率

    // 定义比例
    let xRatio = 100 / 1080; // 水平方向比例（从左边缘向右偏移）
    let yRatio = 150 / 1920; // 垂直方向比例（从下边缘向上偏移）

    // 动态计算坐标
    let x = device.width * xRatio; // 水平方向坐标
    let y = device.height - (device.height * yRatio); // 垂直方向坐标（从底部向上偏移）
    click(x,y)
}

module.exports = dianji;