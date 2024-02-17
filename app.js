class myHeap {
    constructor() {
        this.heapElements = [];
    }

    insert (value) {
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
}

const heap = new myHeap();

heap.insert(100);
heap.insert(120);
heap.insert(150);
heap.insert(110);
heap.insert(10);
heap.insert(250);

console.log(heap);
console.log(Math.floor((0 + 1) / 2) - 1);