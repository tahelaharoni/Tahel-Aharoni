const calc=(operand1,operand2,operator)=>{
    const final=0;
    const op1=parseInt(operand1);
    const op2=parseInt(operand2);
    if(op1==NaN||op2==NaN){
        return NaN;
    }
    if(operator=="+")
    {
        return op1+op2;
    }
    else if(operator=="-")
    {
        return op1-op2;
    }
    else if(operator=="*"){
        return op1*op2;
    }
    else if(operator=="/"){
        return op1/op2;
    }
    else{
        return NaN;
    }
}

const compact=(array)=>{
    let newArr=[];
    array.forEach(element => {
        if(element!=false&&element!=null&&element!=0&&
            element!=""&&element!=undefined&&element!=NaN){
                newArr.push(element);
            }
    });
    return newArr;
}

const intersection=(array1,array2,isStrict)=>{
    let newArr=[];
    if(isStrict==true){
        for(let i=0;i<array1.length;i++){
            for(let n=0;n<array2.length;n++){
                if(array1[i]===array2[n]){
                    newArr.push(array2[i]);
                }
            }
        }
        return newArr;

    }
    if(isStrict==false){
        for(let i=0;i<array1.length;i++){
            for(let n=0;n<array2.length;n++){
                if(array1[i]==array2[n]){
                    newArr.push(array2[i]);
                }
            }
        }
        return newArr;

    }
}

const size=(collection)=>{
    let counter=0;
    collection.forEach(element => {
        counter++;
    });
    return counter;
}

const castArray=(value)=>{
    let array=[];
    return array.push(value);
}