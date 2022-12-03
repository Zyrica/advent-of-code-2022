export default function keyValueSwap(obj) {
    const ret = {};
    Object.keys(obj).forEach(key => {
        ret[obj[key]] = isNaN(key) ? key : Number(key);
    });
    return ret;
}
