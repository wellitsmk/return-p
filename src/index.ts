type P<T> = {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
}

const p = function p<Type>() : Readonly<P<Type>> {
    let rObj : Pick<P<Type>, 'resolve' | 'reject'> = {
        reject: () => {},
        resolve: () => {}
    }

    let pObj = new Promise<Type>((resolve, reject) => {
        rObj = { resolve, reject }
    })
    
    return Object.freeze({
        promise: pObj,
        reject: rObj.reject,
        resolve: rObj.resolve
    })
}

export {
    p
}