alert('Welcome to my calculator')
function calcus(){
    var num1 = prompt('Enter number');
    var op = prompt('Enter operand');
    var num2 = prompt('Enter another number');

    if(op == "+"){
        var ans = Number(num1) + Number(num2)
    }else if(op == '-'){
        var ans = Number(num1) - Number(num2)
    }else if(op == "/"){
        var ans = Number(num1) / Number(num2)
    }else if(op == "*"){
        var ans = Number(num1) * Number(num2)
    }else{
        alert('Please enter correctly all the numbers and operands. Operands can only be "+", "-", "/" or "*" ')
    }
    alert(`Your result is ${ans}`);
    alert('If you had a result of NaN, you did not correctly enter the numbers. Have another go ')
    calcus()
}

calcus()