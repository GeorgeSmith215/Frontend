class MyPromise{
    constructor(executor){
        //初始化Promise值和状态以及用于保存异步执行的回调函数数组
        this.initValue();
        //初始化this绑定，让resolve和reject的this指向当前的MyPromise实例
        this.initBind();
        //执行传进来的函数,另Promise中有throw的话，就相当于执行了reject。所以需要使用try catch
        try{
            executor(this.resolve,this.reject);
        }catch(e){
            //捕捉到错误就执行reject
            this.reject(e);
        }
    }

    initValue(){
        this.PromiseResult = null;//Promise终值
        this.PromiseState = 'pending';//Promise状态

        //先用数组把 then 里的两个回调保存起来，
        //然后等到定时器时间过后，执行了 resolve 或者 reject，
        //再去判断状态，判断要去执行刚刚保存的两个回调中的哪一个回调
        this.onFulfilledCallbacks = [];//保存成功回调
        this.onRejectedCallbacks = [];//保存失败回调
    }

    initBind(){
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
    }

    resolve(value){
        //state是不可变的,前置状态只能是pending
        if(this.PromiseState !== 'pending') return;
        //如果执行resolve，状态变为fulfilled
        this.PromiseState = 'fulfilled';
        //终值为传进来的值
        this.PromiseResult = value;

        //执行数组中保存的成功回调
        while(this.onFulfilledCallbacks.length){
            this.onFulfilledCallbacks.shift()(this.PromiseResult);
        }
    }

    reject(reason){
        //state是不可变的,前置状态只能是pending
        if(this.PromiseState !== 'pending') return;
        //如果执行reject，状态变为rejected
        this.PromiseState = 'rejected';
        //终值为传进来的reason
        this.PromiseResult = reason;

        //执行数组中保存的失败回调
        while(this.onRejectedCallbacks.length){
            this.onRejectedCallbacks.shift()(this.PromiseResult);
        }
    }

    //then接收两个回调onFulfilled，onRejected
    then(onFulfilled,onRejected){
        //参数校验，确保一定是函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val=>val;
        onRejected = typeof onRejected === 'function' ? onRejected : reason =>{throw reason};

        //then的链式调用实现，即then 执行后返回一个Promise对象，就可以保证 then 完还能继续执行 then
        var thenPromise = new MyPromise((resolve,reject)=>{
            const resolvePromise = cb =>{
                //让resolvePromise函数异步执行来模拟then的微任务（虽然不应该用定时器来实现）
                setTimeout(() => {
                    try{
                        const x = cb(this.PromiseResult);
                        if(x === thenPromise){
                            //不能返回自身
                            throw new Error('不能返回自身');
                        }
                        //如果返回值是promise对象
                        if(x instanceof MyPromise){
                            // 若返回值为成功，新promise就是成功
                            // 若返回值为失败，新promise就是失败
                            // 谁知道返回的promise是失败成功？只有then知道
                            x.then(resolve,reject);
                        }else{
                            //非Promise就直接成功
                            resolve(x);
                        }
                    }catch(err){
                        //处理报错
                        reject(err);
                    }
                });
            }

            if(this.PromiseState === 'fulfilled'){
                //如果当前为成功状态，执行第一个回调
                resolvePromise(onFulfilled);
            }else if(this.PromiseState === 'rejected'){
                //如果当前为失败状态，执行第二个回调
                resolvePromise(onRejected);
            }else if(this.PromiseState === 'pending'){
                //如果当前为待定状态，暂时保存两个回调
                this.onFulfilledCallbacks.push(resolvePromise.bind(onFulfilled));
                this.onRejectedCallbacks.push(resolvePromise.bind(onRejected));
            }
                
        })

        //返回包装过的Promise
        return thenPromise;
    }
}

const test = new MyPromise((resolve, reject) => {
    resolve(100) // 输出 状态：失败 值：200
    //reject(100) // 输出 状态：成功 值：200
    // 注意在resolve回调里是reject所以状态是失败，在reject回调里是resolve所以状态是成功
}).then(res => new MyPromise((resolve, reject) => reject(2 * res)), err => new MyPromise((resolve, reject) => resolve(2 * err)))
    .then(res => console.log(res), err => console.log(err))

// console.log(100);

// console.log(200);