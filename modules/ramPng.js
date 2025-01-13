var raPng = {};
function getInnerQuadrilateral(outerFrame) {
    var scale = 0.7
    // 获取外部四边形的四个顶点
    const { topLeft, topRight, bottomLeft, bottomRight, center } = outerFrame;

    // 计算内部四边形的顶点
    const innerTopLeft = {
        x: center.x + (topLeft.x - center.x) * scale,
        y: center.y + (topLeft.y - center.y) * scale
    };
    const innerTopRight = {
        x: center.x + (topRight.x - center.x) * scale,
        y: center.y + (topRight.y - center.y) * scale
    };
    const innerBottomLeft = {
        x: center.x + (bottomLeft.x - center.x) * scale,
        y: center.y + (bottomLeft.y - center.y) * scale
    };
    const innerBottomRight = {
        x: center.x + (bottomRight.x - center.x) * scale,
        y: center.y + (bottomRight.y - center.y) * scale
    };

    return {
        topLeft: innerTopLeft,
        topRight: innerTopRight,
        bottomLeft: innerBottomLeft,
        bottomRight: innerBottomRight,
        center: center
    };
}
function getRandomPointInQuadrilateral(innerFrame) {
    // 获取内部四边形的四个顶点
    const { topLeft, topRight, bottomLeft, bottomRight } = innerFrame;

    // 确定内部四边形的边界
    const minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    const maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    const minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    const maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);

    // 随机生成点，直到落在内部四边形内
    while (true) {
        const randomX = Math.random() * (maxX - minX) + minX;
        const randomY = Math.random() * (maxY - minY) + minY;
        if (isPointInQuadrilateral({ x: randomX, y: randomY }, innerFrame)) {
            return { x: randomX, y: randomY };
        }
    }
}

function isPointInQuadrilateral(point, quadrilateral) {
    // 判断点是否在四边形内（适用于凸四边形）
    // 使用向量叉积法
    const { topLeft, topRight, bottomRight, bottomLeft } = quadrilateral;

    const crossProduct = (a, b, c) => {
        return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
    };

    const d1 = crossProduct(topLeft, topRight, point);
    const d2 = crossProduct(topRight, bottomRight, point);
    const d3 = crossProduct(bottomRight, bottomLeft, point);
    const d4 = crossProduct(bottomLeft, topLeft, point);

    return (d1 >= 0 && d2 >= 0 && d3 >= 0 && d4 >= 0) || (d1 <= 0 && d2 <= 0 && d3 <= 0 && d4 <= 0);
}
raPng.get = function getRandomPointInInnerFrame(outerFrame) {
    // 计算内部四边形
    const innerFrame = getInnerQuadrilateral(outerFrame);

    // 获取内部四边形的随机点
    const randomPoint = getRandomPointInQuadrilateral(innerFrame);

    return randomPoint;
}
module.exports = raPng;