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

// pushInStack(52);
// pushInStack(5);
// pushInStack(2);
// pushInStack(59);
// pushInStack(0);

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


// popFromStack();
// popFromStack();
// popFromStack();
// popFromStack();
// popFromStack();
// popFromStack();
// console.log(stackData)



function pushStack(){
    let value=document.querySelector('#elem').value;
    console.log(value);
    if(currentSize>=max){
        console.warn('Stack is full, can not add elements');
        return;
    }
    stackData[currentSize++]=value;
    document.querySelector('#elem').value=''
    displayStack();

}



function popStack(){
    if(currentSize<=0){
        console.warn('cannot pop element from stack, its already empty');
        return;
    }
    let temp= stackData[currentSize--];
    stackData.length=currentSize;
    console.log('Element popped from Stack:',temp);
    displayStack();
}
function displayStack(){
    console.log(stackData);
}