class Stack{
    stackData;
    stackLength;
    
    constructor(){
        this.stackData=[];
        this.stackLength=this.stackData.length;
    }

    push(element){
        this.stackData[this.stackLength]=element;
        this.stackLength++;
    }
    pop(){
        this.stackLength--;
      let d1=this.stackData[this.stackLength];
      this.stackData.length=this.stackLength;
      return d1;
    }

    display(){
        console.log(this.stackData);
    }

    reverseString(str){
        let strData=str.split('')
        let rvrStr='';
       for(let i=0; i<strData.length;i++){
        this.push(strData[i]);
       }
       for(let i=0; i<strData.length;i++){
        rvrStr=rvrStr+this.pop()
       }

       return rvrStr;
    }
}

let s1=new Stack();
console.log(s1.reverseString('Saurabh'))

