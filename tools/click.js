function clickSequentially(index, images) {
    if (index >= images.length) {
        toastLog("所有点击操作成功");
        return true; // 所有操作完成
    }

    let image = images[index];
    let result = n.click(image);

    if (!result) {
        toastLog(`点击失败，重试`);
        return clickSequentially(index, images); // 重试当前操作
    } else {
        toastLog(`点击成功，继续下一个操作`);
        return clickSequentially(index + 1, images); // 继续下一个操作
    }
}

// 定义需要点击的图像路径
const images = [
    get_game_png,
    get_login_close_png,
    get_1,
    get_2,
    get_3
];

// 开始执行
clickSequentially(0, images);