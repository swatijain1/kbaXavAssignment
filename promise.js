const asyncFuntion = (someValue, time=5000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(someValue), time)
    })
}

const promiseList = [asyncFuntion("hi", 1000),asyncFuntion("hello",10000), asyncFuntion("how are you?", 2000)]

const result = (promiseList) => {
    let resolvedPromise = 0, output=[];
    return new Promise((resolve,reject) => {
        promiseList.map((promiseToResolve, i) => {
            promiseToResolve.then(data => {
                output[i] = data;
                resolvedPromise++;
                if(resolvedPromise === promiseList.length) {
                    resolve(output)
                }
            })
            .catch(err => reject(err))
        })
    })
}

result(promiseList)
    .then(result => console.log(result))
    .catch(error => console.log(error))
