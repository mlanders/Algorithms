import DLL from "./DLL.js";

let list = new DLL();

list.append(4);
list.push(1);
list.push(2);
list.append(5);
list.push(3);
console.log("----------");
console.log(list.printList());
console.log("Length: ", list.length);
console.log("----------");
list.pop();
console.log("----------");
console.log("Length: ", list.length);
console.log(list.printList());
list.shift();
console.log("----------");
console.log("Length: ", list.length);
console.log(list.printList());
