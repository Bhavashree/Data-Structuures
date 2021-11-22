// class Node{
// 	constructor(element){
// 		this.element = element;
// 		this.next = null;
// 	}
// }

// class LinkedList{
// 	contructor(){
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	add(element){
// 		var node = new Node(element);
// 		var current;
// 		if(this.head == null){
// 			this.head = node;
// 		} else {
// 			current = this.head;
// 			while(current.next){
// 				current = current.next;
// 			}
// 			current.next = node;
// 		}
// 		this.size++;
// 	}
// 	printList(){
// 		var curr = this.head;
// 		while(curr){
// 			console.log(curr.element);
// 			curr = curr.next;
// 		}
// 	}
// 	insertAt(element,index){
// 		if(index >0&& index > this.size){
// 			return false;
// 		} else {
// 			var n = new Node(element);
// 			if(index == 0){
// 				n.next = this.head;
// 				this.head = n;
// 			} else {
// 				var curr, prev;
// 				curr = this.head;
// 				var it = 0;
// 				while (it < index){
// 					prev = curr;
// 					curr = curr.next;
// 					it++;
// 				}
// 				n.next = curr;
// 				prev.next = n;
// 			}
// 			this.size++;
// 		}
// 	}
// 	findCycle(l){
// 		var slow = this.head,fast = this.head;
// 		while(fast && fast.next){
// 			fast = fast.next.next;
// 			slow = slow.next;
// 			if(slow== fast){
// 				return true
// 			} 
// 				return false;
// 		}
// 	}

// }

// var ll = new LinkedList();
// ll.add(10)
// ll.add(30)
// ll.add(40)
// ll.add(50)
// ll.printList();
// ll.insertAt(20,1)
// ll.printList();
// var x= ll.findCycle(ll)
// console.log(x);


var obj={}
var n= 3
for(var i=0;i<n;i++){
	obj[i] = [i,i]
}
console.log(obj)
