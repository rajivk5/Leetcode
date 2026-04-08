/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let heap = new MaxPriorityQueue();

    for (let i = 0; i < stones.length; i++) {
        heap.enqueue(stones[i]);
    }

    while(heap.size()>1){
        let x = heap.dequeue();
        let y = heap.dequeue();

        if(x-y > 0){
            heap.enqueue(x-y)
        }
    }

    return heap.dequeue() || 0
};