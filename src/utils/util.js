/**
 * 监听容器大小变化
 * @param {HTMLElement} container 容器
 * @param {Function} callback 
 */
export function resizeListener(container, callback) {
    if (container) {
        const observer = new ResizeObserver(
            throttle(() => {
                callback()
            }, 100)
        )

        observer.observe(container);
    }
}

//节流
export function throttle(func, wait) {
    let invokeTime, args, context, result, timerId

    const invokeFunc = () => {
        timerId = undefined;
        if (args) {
            invokeTime = Date.now()
            result = func.apply(context, args)
        }
        args = context = undefined
    }

    const remainingWait = () => {
        if (wait == null) return
        //
        if (invokeTime === undefined) return 0
        const interval = Date.now - invokeTime
        return wait - interval
    }

    const abort = () => {
        if (timerId) clearTimeout(timerId)
        args = context = timerId = invokeTime = undefined
    }

    function throttled(...rest) {
        args = rest
        context = this

        if (timerId === undefined) {
            timerId = setTimeout(invokeFunc, remainingWait())
        }

        return result
    }

    function defineGet(target, property, fn) {
        Object.defineProperty(target, property, {
            configurable: false,
            enumerable: false,
            get: fn
        })
    }

    throttled.abort = abort
    defineGet(throttled, 'pending', () => timerId != null)

    return throttled

}
