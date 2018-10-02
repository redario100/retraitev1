// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
function formatMillier2(nombre){
  nombre += '';
  var sep = ' ';
  var reg = /(\d+)(\d{3})/;
  while( reg.test( nombre)) {
    nombre = nombre.replace( reg, '$1' +sep +'$2');
  }
  return nombre;
}

function myTrim(x) {
    return x.replace(/\s/g, '');
}

function add(p)
{
document.getElementById("m1").contentEditable = "true";
var m=$('#'+p).html();
var m0=myTrim(m);
var m2 = Number(m0);
$('#'+p).html(formatMillier2(m2+1));
}


function sous(p)
{
var m=$('#'+p).html();
 var m2 = Number(m);
$('#'+p).html(m2-1);
}

	
	

function pip()
{
	var today = new Date();
var weekLater = new Date().setDate(today.getDate() + 7);
 
var calendarDisabled = myApp.calendar({
    input: '#calendar-default',
    dateFormat: 'M dd yyyy',

});
}



function calendar1()
{
	var today = new Date();
var weekLater = new Date().setDate(today.getDate() + 7);
 
var calendarDisabled = myApp.calendar({
    input: '#calendar-default1',
    dateFormat: 'M dd yyyy',

});
}



function calendar2()
{
	var today = new Date();
var weekLater = new Date().setDate(today.getDate() + 7);
 
var calendarDisabled = myApp.calendar({
    input: '#calendar-default2',
    dateFormat: 'M dd yyyy',

});
}

function calendar3()
{
	var today = new Date();
var weekLater = new Date().setDate(today.getDate() + 7);
 
var calendarDisabled = myApp.calendar({
    input: '#calendar-default3',
    dateFormat: 'M dd yyyy',

});
}


function demo1()
{
var pickerDevice = myApp.picker({
  input: '#demo-picker-device1',
  cols: [
    {
      textAlign: 'center',
      values: ['Célibataire', 'Marié', 'Divorcé', 'Veuf']
    }
  ]
});
}


function demo3()
{
var pickerDevice = myApp.picker({
  input: '#demo-picker-device3',
  cols: [
    {
      textAlign: 'center',
      values: ['Célibataire', 'Marié', 'Divorcé', 'Veuf']
    }
  ]
});
}

function persone1()
{
var pickerDevice = myApp.picker({
  input: '#demo-picker-device2',
  cols: [
    {
      textAlign: 'center',
      values: ['Homme', 'Femme']
    }
  ]
});
}



function persone4()
{
var pickerDevice = myApp.picker({
  input: '#demo-picker-device4',
  cols: [
    {
      textAlign: 'center',
      values: ['Homme', 'Femme']
    }
  ]
});
}



function persone6()
{
var pickerDevice = myApp.picker({
  input: '#demo-picker-device6',
  cols: [
    {
      textAlign: 'center',
      values: ['Homme', 'Femme']
    }
  ]
});
}



