//1

function sumab (a,b) {
    return a+b;
};

function multiplyab (a,b) {
    return a*b;
};

function sum (a, b) {
    document.getElementById("sumResult").innerHTML = sumab(getElement("numberOne"), getElement("numberTwo")); 
};

function multiply (a, b) {
    document.getElementById("multiplyResult").innerHTML = multiplyab(getElement("numberOne"), getElement("numberTwo"));  
};

function getElement (id) {
    return parseInt(document.getElementById(id).value);
};



