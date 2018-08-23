const find = (arr, matcher) => {
    if (!arr) return null
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (matcher(ele)) {
            return ele
        }
    }
    return null
}

const remove = (arr, matcher) => {
    if (!arr) return null
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (matcher(ele)) {
            arr.splice(i, 1)
        }
    }
}

module.exports = {
    find: find,
    remove: remove
}