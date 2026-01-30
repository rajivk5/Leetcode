
var MyQueue = function () {
    this.s = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let s2 = []
    for (let i = this.s.length - 1; i > 0; i--) {

        s2.push(this.s.pop())

    }

    let ans = this.s.pop()

    for (let j = s2.length - 1; j >= 0; j--) {
        this.s.push(s2[j]);
    }

    return ans
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let s2 = []
    for (let i = this.s.length - 1; i > 0; i--) {

        s2.push(this.s.pop())

    }

    let ans = this.s[0]

    for (let j = s2.length - 1; j >= 0; j--) {
        this.s.push(s2[j]);
    }

    return ans
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */