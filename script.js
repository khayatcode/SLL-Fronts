class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(data){
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        return this.head
    }

    removeFront(){
        if(this.head == null){
            return null
        } else {
            this.head = this.head.next
            return this.head
        }
    }

    front(){
        if(this.head == null){
            return null
        } else {
            return this.head.data
        }
    }

    contains(value){
        if(this.head == null){
            return false
        } else {
            let promise = this.head
            while(promise.next != null){
                if(promise.data == value){
                    return true
                }
                promise = promise.next
            }
            return false
        }
    }
}

let SLL1 = new SLL()
console.log("addFront")
console.log(SLL1)
SLL1.addFront(18)
console.log(SLL1)
SLL1.addFront(5)
console.log(SLL1)
SLL1.addFront(73)
console.log(SLL1)
console.log("Contains")
console.log(SLL1.contains(5))
console.log(SLL1.contains(7))