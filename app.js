class myHeap {
    constructor() {
        this.heapElements = [];
    }

    insert(value) {
        this.heapElements.push(value);
        let currentElementIndex = this.heapElements.length - 1;
        let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
        while (parentElementIndex >= 0 && (this.heapElements[currentElementIndex] > this.heapElements[parentElementIndex])) {
            const parentElement = this.heapElements[parentElementIndex];
            this.heapElements[parentElementIndex] = value;
            this.heapElements[currentElementIndex] = parentElement;
            currentElementIndex = parentElementIndex;
            parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
        }
    }

    process() {
        if (this.heapElements.length === 0) {
            return null;
        }
        if (this.heapElements.length === 1) {
            return this.heapElements.pop();
        }
        const topElement = this.heapElements[0];

        this.heapElements[0] = this.heapElements.pop();

        let currentElementIndex = 0;
        while (currentElementIndex > -1) {
            let leftChildIndex = 2 * currentElementIndex + 1;
            let rightChildIndex = 2 * currentElementIndex + 2;

            let childElementIndex = this.heapElements[rightChildIndex] &&
                this.heapElements[rightChildIndex] >= this.heapElements[leftChildIndex]
                ? rightChildIndex
                : leftChildIndex;
            if (this.heapElements[currentElementIndex] <= this.heapElements[childElementIndex]) {
                const currentNode = this.heapElements[currentElementIndex];
                const currentChildNode = this.heapElements[childElementIndex];
                this.heapElements[childElementIndex] = currentNode;
                this.heapElements[currentElementIndex] = currentChildNode;
                currentElementIndex = childElementIndex;
            } else {
                currentElementIndex = -1;
            }

        }




        return topElement;
    }
}

const heap = new myHeap();

heap.insert(250);
heap.insert(150);
heap.insert(120);
heap.insert(100);
heap.insert(110);
heap.insert(10);


// heap.process();
// heap.process();
// heap.process();
// heap.process();
// heap.process();

console.log(heap.process());
console.log(heap);