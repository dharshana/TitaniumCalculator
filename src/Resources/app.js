var win = Ti.UI.createWindow({
	backgroundColor: '#063952',
	layout: 'vertical',
});
var textBoxValue = 0;
var btnpress = false;
var decimalpress = false;
var addoperation = false;
var modoperation = false;
var divoperation = false;
var miloperation = false;

Ti.include('views.js'); // list views
Ti.include('buttons.js'); // textbox and btns

win.add(tb);
win.add(view5);
win.add(view4);
win.add(view3);
win.add(view2);
win.add(view1);

win.open();

// Event listeners for Clear Button
tblclear.addEventListener('click', function(){
	Ti.API.info("LOG GOES HERE");
	textBoxValue = 0;
	btnpress = false;
	decimalpress = false;
	tb.value='';
	decimalpress = false;
	addoperation = false;
	modoperation = false;
	divoperation = false;
    miloperation = false;
})
Ti.include('numberlistiners.js');

btndecimal.addEventListener('click', function(){
	if(btnpress){
		tb.value = '0.';
		btnpress = false;
	}else{
		if(decimalpress==false){
			tb.value = (tb.value=='0')?'0.':tb.value+'.';
			decimalpress = true;
		}
	}
});

// add operation/listiner
btnadd.addEventListener('click', function(){
	addoperation = true;
	if(modoperation){
		textBoxValue = parseFloat(textBoxValue) - parseFloat(tb.value);
		modoperation = false;
	}else if(divoperation){
		divoperation = false;
		textBoxValue = parseFloat(textBoxValue) / parseFloat(tb.value);
	}else if(miloperation){	
		miloperation = false;
		textBoxValue = parseFloat(textBoxValue) * parseFloat(tb.value);
	}else{
		textBoxValue = parseFloat(textBoxValue) + parseFloat(tb.value);
	} 
	btnpress = true;
	decimalpress = false;
	tb.value=textBoxValue;
});
// END OF add operation/listiner

// Mod Operation/Listiner
btndif.addEventListener('click', function(){
	modoperation = true;
	if(addoperation){
		textBoxValue = parseFloat(textBoxValue) + parseFloat(tb.value);
		addoperation = false;
	}else if(divoperation){
		divoperation = false;
		textBoxValue = parseFloat(textBoxValue) / parseFloat(tb.value);
	}else if(miloperation){	
		textBoxValue = parseFloat(textBoxValue) * parseFloat(tb.value);
		miloperation = false;
	}else{
		if(textBoxValue==0){
			textBoxValue = parseFloat(tb.value);
		}else{
			textBoxValue = parseFloat(textBoxValue) - parseFloat(tb.value);
		}
	} 
	btnpress = true;
	decimalpress = false;
	tb.value=textBoxValue;
})
// END OF Mod Operation/Listiner

// Muil Operation/Listiner
btnmil.addEventListener('click', function(){
	miloperation = true;
	if(addoperation){
		textBoxValue = parseFloat(textBoxValue) + parseFloat(tb.value);
		addoperation = false;
	}else if(divoperation){
		divoperation = false;
		textBoxValue = parseFloat(textBoxValue) / parseFloat(tb.value);
	}else if(modoperation){	
		modoperation = false;
		textBoxValue = parseFloat(textBoxValue) - parseFloat(tb.value);
	}else{
		if(textBoxValue==0){
			textBoxValue = parseFloat(tb.value);
		}else{
			textBoxValue = parseFloat(textBoxValue) * parseFloat(tb.value);
		}
	} 
	
	btnpress = true;
	decimalpress = false;
	tb.value=textBoxValue;
});

// division operation
btndiv.addEventListener('click', function(){
	divoperation = true;
	if(addoperation){
		textBoxValue = parseFloat(textBoxValue) + parseFloat(tb.value);
		addoperation = false;
	}else if(miloperation){
		miloperation = false;
		textBoxValue = parseFloat(textBoxValue) * parseFloat(tb.value);
	}else if(modoperation){	
		modoperation = false;
		textBoxValue = parseFloat(textBoxValue) - parseFloat(tb.value);
	}else{
		if(textBoxValue==0){
			textBoxValue = parseFloat(tb.value);
		}else{
			textBoxValue = parseFloat(textBoxValue) / parseFloat(tb.value);
		}
	} 
	
	btnpress = true;
	decimalpress = false;
	tb.value=textBoxValue;
});
// END OF division Operation
btnequal.addEventListener('click', function(){
	//divoperation = true;
	if(addoperation){
		addoperation = false;
		if(textBoxValue==0){
			textBoxValue = parseFloat(tb.value);
		}else{
			textBoxValue = parseFloat(textBoxValue) + parseFloat(tb.value);
		}
	}else if(miloperation){
		miloperation = false;
		if(textBoxValue==0){
			textBoxValue = parseFloat(tb.value);
		}else{
			textBoxValue = parseFloat(textBoxValue) * parseFloat(tb.value);
		}
	}else if(modoperation){	
		modoperation = false;
		if(textBoxValue==0){
			textBoxValue = parseFloat(tb.value);
		}else{
			textBoxValue = parseFloat(textBoxValue) - parseFloat(tb.value);
		}
	}else if(divoperation){
		if(textBoxValue==0){
			textBoxValue = parseFloat(tb.value);
		}else{
			textBoxValue = parseFloat(textBoxValue) / parseFloat(tb.value);
		}
	} 
	
	btnpress = true;
	decimalpress = false;
	tb.value=textBoxValue;
});