//路由拼接
export function parseUrlData(obj) {
    let prefix = '?'
    let _result = []
    for (let key in obj) {
        let value = obj[key]
        if (['', undefined, null].includes(value)) {
            continue
        }
        _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
    }
    return _result.length ? prefix + _result.join('&') : ''
}
