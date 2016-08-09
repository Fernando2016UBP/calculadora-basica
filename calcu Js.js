// JavaScript Document
function fx_calcular(){
var valor1;
var valor2;
var result;

valor1 = document.calculadora.input1.value;
valor2 = document.calculadora.input2.value;
valor_op = document.calculadora.op.value;

switch(valor_op)
{
	case "S":
	result= parseInt(valor1) + parseInt(valor2);
	break;
	
	case"R":
	result=valor1 - valor2;
	break;
	
	case"M":
	result=valor1 * valor2;
	break;
	
	case"D":
	result=valor1 / valor2;
	break;
}
alert("El resultado es = " + result);
}