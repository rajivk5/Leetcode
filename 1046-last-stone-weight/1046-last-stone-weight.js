/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let heap = MaxPriorityQueue.fromArray(stones)


    while (heap.size() > 1) {
        let x = heap.pop();
        let y = heap.pop();

        if (x - y > 0) {
            heap.push(x - y)
        }
    }

    return heap.pop() || 0
};