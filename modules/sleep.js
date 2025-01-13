// 封装 sleep 函数
function Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 封装 randomSleep 函数
async function randomSleep(max = 200) {
    const randomTime = Math.floor(Math.random() * (max + 1)); // 生成 0 到 max 之间的随机数
    console.log(`Sleeping for ${randomTime} milliseconds...`);
    await sleep(randomTime);
    console.log('Awake!');
}

// 导出函数
module.exports = {
    Sleep,
    randomSleep
};