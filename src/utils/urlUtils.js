//提取url参数工具类
// https://api.i-lynn.cn:443/home?keyword=%E5%BC%A0%E5%86%9B
export const param2Obj = url => {
    const search = url.split('?')[1]  //keyword=%E5%BC%A0%E5%86%9B
    if (!search) {
        return {}
    }
    //{keyword:'张三'}
    return JSON.parse('{"' + decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') + '"}')
}