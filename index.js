console.log("You are the best in javaScript");

let stackData=[];
let currentSize=stackData.length;
let max=5;

function pushInStack(newElement){
    if(currentSize>=max){
        alert('Stack Size exceeded')
        return
    }
    stackData[currentSize++]=newElement;
    console.log(stackData)
}

pushInStack(52);
pushInStack(5);
pushInStack(2);
pushInStack(59);
pushInStack(0);

function popFromStack(){
    if(currentSize<=0){
        alert('Nothing inside Stack');
        return
    }
    let temp =stackData[currentSize];
    currentSize=currentSize-1;
    stackData.length= currentSize;

    return temp;
}


popFromStack();
popFromStack();
popFromStack();
popFromStack();
// popFromStack();
// popFromStack();
console.log(stackData)