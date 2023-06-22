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
        if(this.head == null){
            this.head = new Node(data)
            return data
        }
        else{
            let present = this.head
            while(present.next != null){
                present = present.next
            }
            present.next = new Node(data)
            return data
        }
    }

    removeFront(){
        if(this.head == null){
            return null
        }
        else if(this.head.next == null){
            let temp = this.head.next
            this.head = null
            return temp
        } else {
            let present = this.head
            while(present.next.next != null){
                present = present.next
            }
            let temp = present.next
            present.next = null
            return temp
        }
    }

    front(){
        if(this.head == null){
            return null
        } else {
            return this.head.data
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
console.log("removeFront")
SLL1.removeFront()
console.log(SLL1)
console.log("front")
console.log(SLL1.front())