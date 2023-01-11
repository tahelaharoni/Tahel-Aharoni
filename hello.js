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
    
}