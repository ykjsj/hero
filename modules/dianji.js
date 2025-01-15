

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
dianji.zhongjian = function dianjizhongjian() {
    setScreenMetrics(device.width, device.height); // 动态设置屏幕分辨率

    // 定义比例
    let xRatio = 0.5; // 水平方向比例（屏幕中间）
    let yRatio = 0.5; // 垂直方向比例（屏幕中间）

    // 动态计算坐标
    let x = device.width * xRatio; // 水平方向坐标
    let y = device.height * yRatio; // 垂直方向坐标

    click(x, y); // 点击屏幕中间
}

module.exports = dianji;