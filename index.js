const find = (arr, matcher) => {
    if(!arr) return null
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (matcher(ele)) {
            return ele
        }
    }
    return null
}

module.exports = {
    find: find
}