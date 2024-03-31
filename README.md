## DSA Interview preparation - LeetCode

### Linked List
- **[Design and implement a Linked List](https://github.com/vivekdbit/DSA/blob/main/Javascript/single-linked-list.js)**
- **[206. Reverse Linked List](https://github.com/vivekdbit/DSA/blob/main/Javascript/reverse-linked-list.js)**
- **[876. Middle of the Linked List](https://github.com/vivekdbit/DSA/blob/main/Javascript/middle-linked-list.js)**
- **[2095. Delete the Middle Node of a Linked List](https://github.com/vivekdbit/DSA/blob/main/Javascript/delete-middle-linked-list.js)**


### Stack
- **[Design and implement Stack using Linked List](https://github.com/vivekdbit/DSA/blob/main/Javascript/stack-linked-list.js)**
- **[20. Valid Parentheses](https://github.com/vivekdbit/DSA/blob/main/Javascript/valid-parentheses.js)**
- **[735. Asteroid Collisions](https://github.com/vivekdbit/DSA/blob/main/Javascript/Asteroid-Collision.js)**

### Queues
- **[Queue Implementation using linked list](https://github.com/vivekdbit/DSA/blob/main/Javascript/queue-implement-linked-list.js)**
- **[Queue Implementation using array](https://github.com/vivekdbit/DSA/blob/main/Javascript/queue-implement-array.js)**


### Binary Trees
- **[Binary Trees Implementation](https://github.com/vivekdbit/DSA/blob/main/Javascript/binary-tree-implement.js)**
- **[Binary Trees Level Order Traversal](https://github.com/vivekdbit/DSA/blob/main/Javascript/binary-tree-level-order-traversal.js)**
- **[Count of Nodes](https://github.com/vivekdbit/DSA/blob/main/Javascript/binary-tree-node-count.js)**
- **[Right Side View](https://github.com/vivekdbit/DSA/blob/main/Javascript/binary-tree-rightSideView.js)**

## DSA - Cheat sheet

### Array
```
const array = ["hello", "world"];
array.find((el) => el === "world"); // world
array.findIndex((el) => el === "world"); // 1

[1, 2].includes(1); // true

// Array fill
Array.from({ length: 2 }, () => ["lol"]); // [["lol"], ["lol"]]
Array(2).fill(["lol"]); // [["lol"], ["lol"]]
Array(6).fill(0); // [0, 0, 0, 0, 0, 0]

["a", "b"].reverse(); // ['b', 'a']

// Swap
let arr = [["lolA"], ["lolB"]];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr); // Output: [["lolB"], ["lolA"]]

// Number sort
let numbers = [3, 1, 5, 2, 4];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

const stack = ["A", "B", "D", "E", "C", "F"];
const s = stack.shift(); // "A"
const p = stack.pop(); // "F"
```

### Hashmap
```
// Creating a Map
let hashmap = new Map();

// Adding key-value pairs
hashmap.set("key1", "value1");
hashmap.set("key2", "value2");

// Accessing values by keys
console.log(hashmap.get("key1")); // Output: value1
console.log(hashmap.get("key2")); // Output: value2

// Checking if a key exists
console.log(hashmap.has("key1")); // Output: true

// Iterating over key-value pairs
for (let [key, value] of hashmap) {
    console.log(`${key}: ${value}`);
}
```

### Set
```
// Creating a Set
let mySet = new Set();

// Adding elements to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Adding a duplicate element (will be ignored)

// Checking the size of the Set
console.log(mySet.size); // Output: 3

// Checking if an element exists in the Set
console.log(mySet.has(2)); // Output: true

// Removing an element from the Set
mySet.delete(2);

// Iterating over elements in the Set
for (let item of mySet) {
    console.log(item);
}
// Output:
// 1
// 3
```

### Math

```
Math.pow(2, 2); // 4
Math.abs(-5); // 5
Math.log10(100); // 10
Math.max(...[1, 2, 3]); // 3
Math.min(...[1, 2, 3]); // 1
Math.sqrt(4); // 2
Math.ceil(1.2); // 2 (1.2 is rounded up to nearest value 2)
Math.floor(1.2); // 1 (1.2 is rounded down to nearest value 1)
```

### Patterns
- Frequency Counter
- 2 Pointer
- Sliding Window
- Divide & Conquer
- Recursion