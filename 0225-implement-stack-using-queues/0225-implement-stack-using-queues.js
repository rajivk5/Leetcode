
var MyStack = function () {
    this.q = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {

    for (let i = 0; i < this.q.length - 1; i++) {

        let front = this.q.shift()
        this.q.push(front)

    }
    let ans = this.q[0]
    this.q.shift()
    return ans

};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {


    for (let i = 0; i < this.q.length - 1; i++) {

        let front = this.q.shift()
        this.q.push(front)

    }

    let ans = this.q[0]

    this.q.push(this.q.shift())

    return ans


};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */