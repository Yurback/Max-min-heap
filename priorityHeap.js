class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityHeap {
    constructor() {
        this.heapElements = [];
    }

    insert(value, priority) {
        const newNode = new Node(value, priority);
        this.heapElements.push(newNode);
        let currentElementIndex = this.heapElements.length - 1;
        let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
        while (parentElementIndex >= 0 && (this.heapElements[currentElementIndex].priority > 
            this.heapElements[parentElementIndex].priority)) 
            {
            const parentElement = this.heapElements[parentElementIndex];
            this.heapElements[parentElementIndex] = newNode;
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
                this.heapElements[rightChildIndex].priority >= this.heapElements[leftChildIndex].priority
                ? rightChildIndex
                : leftChildIndex;
            if (this.heapElements[childElementIndex] && this.heapElements[currentElementIndex].priority <= this.heapElements[childElementIndex].priority) {
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

const heap = new PriorityHeap();

heap.insert('Do my homework', 20);
heap.insert('Clean room', 10);
heap.insert('Buy products in the grossmarket', 40);
heap.insert('Walk with dog', 15);
heap.insert('Cooking', 50);
heap.insert('Watch TV', 45);




console.log(heap.process());
console.log(heap.process());
console.log(heap.process());
console.log(heap.process());

console.log(heap);