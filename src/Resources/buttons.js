var tb = Ti.UI.createTextField({
	width: '94%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	backgroundColor: '#0384b2',
	value:'',
	top: 25, height:100,
	color:'#ffffff',
	textAlign:'right',
	font: {fontSize: '40'},
});
// clear button
var tblclear = Ti.UI.createButton({
	title: 'CE',
	width: 223,
	height: 110,
	left:0,
	top:10,
	backgroundColor:'#0a4d6e',
	color:'#ffffff',
	font: {fontSize: '25'},
});
// Delete last charector
var tbldelete = Ti.UI.createButton({
	title: 'Delete',
	width: 223,
	height: 110,
	right:0,
	top:10,
	backgroundColor:'#0a4d6e',
	color:'#ffffff',
	font: {fontSize: '25'},
});
//*** numbers
var btn1 = Ti.UI.createButton({
	title: '1',
	width: 110,
	height: 110,
	left:0,
	top:0,
	backgroundColor:'#007dba',
	color:'#ffffff',
	font: {fontSize: '35'},
});
var btn2 = Ti.UI.createButton({
	title: '2',
	width: 110,
	height: 110,
	top:0,
	left:113,
	backgroundColor:'#007dba',
	color:'#ffffff',
	font: {fontSize: '35'},
});
var btn3 = Ti.UI.createButton({
	title: '3',
	width: 110,
	height: 110,
	right: 114,
	top:0	,
	backgroundColor:'#007dba',
	color:'#ffffff',
	font: {fontSize: '35'},
});

var btn4 = Ti.UI.createButton({
	title: '4',
	width: 110,
	height: 110,
	left:0,
	top:0,
	backgroundColor:'#007dba',
	color:'#ffffff',
	font: {fontSize: '35'},
});
var btn5 = Ti.UI.createButton({
	title: '5',
	width: 110,
	height: 110,
	top:0,
	left:113,
	backgroundColor:'#007dba',
	color:'#ffffff',
	font: {fontSize: '35'},
});
var btn6 = Ti.UI.createButton({
	title: '6',
	width: 110,
	height: 110,
	right: 114,
	top:0	,
	backgroundColor:'#007dba',
	color:'#ffffff',
	font: {fontSize: '35'},
});

var btn7 = Ti.UI.createButton({
	title: '7',
	width: 110,
	height: 110,
	left:0,
	top:0,
	backgroundColor:'#007dba',
	color:'#ffffff',
	font: {fontSize: '35'},
});
var btn8 = Ti.UI.createButton({
	title: '8',
	width: 110,
	height: 110,
	top:0,
	left:113,
	backgroundColor:'#007dba',
	color:'#ffffff',
	font: {fontSize: '35'},
});
var btn9 = Ti.UI.createButton({
	title: '9',
	width: 110,
	height: 110,
	right: 114,
	top:0	,
	backgroundColor:'#007dba',
	color:'#ffffff',
	font: {fontSize: '35'},
});
var btn0 = Ti.UI.createButton({
	title: '0',
	width: 110,
	height: 110,
	top:0,
	left:113,
	backgroundColor:'#007dba',
	color:'#ffffff',
	font: {fontSize: '35'},
});
// decimal point
var btndecimal = Ti.UI.createButton({
	title: '.',
	width: 110,
	height: 110,
	left:0,
	top:0,
	backgroundColor:'#007dba',
	color:'#ffffff',
	font: {fontSize: '35'},
});
//*** operational btns
var btndiv = Ti.UI.createButton({
	title: '/',
	width: 110,
	height: 110,
	right:0,
	top:0,
	backgroundColor:'#0a4d6e',
	color:'#ffffff',
	font: {fontSize: '35'},
});
var btnmil= Ti.UI.createButton({
	title: 'x',
	width: 110,
	height: 110,
	right:0,
	top:0,
	backgroundColor:'#0a4d6e',
	color:'#ffffff',
	font: {fontSize: '35'},
});
var btndif= Ti.UI.createButton({
	title: '-',
	width: 110,
	height: 110,
	right:0,
	top:0,
	backgroundColor:'#0a4d6e',
	color:'#ffffff',
	font: {fontSize: '35'},
});
var btnequal = Ti.UI.createButton({
	title: '=',
	width: 110,
	height: 110,
	right: 114,
	top:0,
	backgroundColor:'#8f0000',
	color:'#ffffff',
	font: {fontSize: '35'},
});
var btnadd= Ti.UI.createButton({
	title: '+',
	width: 110,
	height: 110,
	right:0,
	top:0,
	backgroundColor:'#0a4d6e',
	color:'#ffffff',
	font: {fontSize: '35'},
});
//adding to view1
view1.add(btndecimal);
view1.add(btn0);
view1.add(btnequal);
view1.add(btnadd);

//adding to view1
view2.add(btn1);
view2.add(btn2);
view2.add(btn3);
view2.add(btndiv);

//adding to view2
view3.add(btn4);
view3.add(btn5);
view3.add(btn6);
view3.add(btnmil);

//adding to view3
view4.add(btn7);
view4.add(btn8);
view4.add(btn9);
view4.add(btndif);

view5.add(tblclear);
view5.add(tbldelete);