const display = document.getElementById("display");
const numberClass = document.getElementsByClassName('number');
const operatorClass = document.getElementsByClassName('operatorClass');
const equalClass = document.getElementsByClassName('equalClass');

let operatorPushedFlag;
let currentCalculation;
let valueModyficator;
let operator;

const init = function(){
	display.value ="0";
	currentCalculation = "";
	valueModyficator=null;
	operatorPushedFlag = false;
	operator = "";
}
init();

const calcelZero = function(){
	if (display.value == "0"){

	}
}



const numberPushed = function(){
	if (!operatorPushedFlag){
		if (valueModyficator==null){
			currentCalculation +=this.getAttribute('data-value');
		}else{
			valueModyficator +=this.getAttribute('data-value');
		}
	}else{
		if (valueModyficator==null){

			currentCalculation +=this.getAttribute('data-value');
		}else{
			valueModyficator +=this.getAttribute('data-value');
		}
		operatorPushedFlag = false;
	}

	if (valueModyficator==null){
		display.value = currentCalculation;
	}else{
		display.value = valueModyficator;
	}
}


const equalPushed = function(){
	if (valueModyficator != null && valueModyficator!=""){
		if(operator == "+"){
			currentCalculation = parseInt(currentCalculation) + parseInt(valueModyficator);
		}
		else if(operator == "-"){
			currentCalculation = parseInt(currentCalculation) - parseInt(valueModyficator);
		}
		else if(operator == "*"){
			currentCalculation = parseInt(currentCalculation) * parseInt(valueModyficator);
		}
		else if(operator == "/"){
			currentCalculation = parseInt(currentCalculation) / parseInt(valueModyficator);
		}
		display.value = currentCalculation;
	}
}

const operatorPushed = function(){
	if (valueModyficator!=null){
		equalPushed();
	}
	operator = this.getAttribute('data-value');
	operatorPushedFlag = true;
	valueModyficator = ""; //od tej pory nie jest null, tylko else


}


for(let i=0; i<numberClass.length; i++){
	numberClass[i].onclick = numberPushed;
};

for(let i=0; i<operatorClass.length; i++){
	operatorClass[i].onclick = operatorPushed;
};

for(let i=0; i<equalClass.length; i++){
	equalClass[i].onclick = equalPushed;
};


const cancel= document.getElementById("cancel");
cancel.addEventListener("click", init); 

const arrow = document.getElementById("arrow");
arrow.addEventListener("click", function(){
	if(valueModyficator!=null && valueModyficator!=""){
		valueModyficator = valueModyficator.substring(0, valueModyficator.length-1);
		display.value = valueModyficator;
	}else{
		if(currentCalculation.length>0){
			currentCalculation = currentCalculation.substring(0, currentCalculation.length-1);
			display.value = currentCalculation;
		}
	}
	
})

//po drugim kliknieciu na = potem + dodaje się modyfikator
