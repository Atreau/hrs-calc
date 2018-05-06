
/*function inputH(){
	var inH = document.getElementById('hr').value;
	var key = window.event.keyCode;
	var zero = "0";
	var itemH;
	
	if(key === 13){
		
		if(inH >= 0 && inH <= 23){
			if(inH >= 0 && inH <= 9){
				itemH = zero + inH;
				document.getElementById('min').focus();
			}
			else{
				itemH = inH; 
				document.getElementById('min').focus();
			}
		}
		else
			alert("Input invalid");
	}
}*/

/*function inputM(){
	var inM = document.getElementById('min').value;
	var key = window.event.keyCode;
	
	if(key === 13){
		
		if(inM >= 0 && inM <= 59){
			var itemM = inM; 
			//document.getElementById('min').disabled = 'true';
			document.getElementById('add').focus();
		}
		else
			alert("Input invalid");
	}
	
}*/

/*function addItem(){
	var itemH = document.getElementById('hr').value;
	var itemM = document.getElementById('min').value;
	var del = " : ";
	var time = itemH + del + itemM;
	
	alert(time);
	document.getElementById('timeIn').innerHTML = time;
	
}*/

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function timeIn() {
  var inH = document.getElementById('hr').value;
  var zero = "0";
  var itemH = inH;
		
		if(inH >= 0 && inH <= 23){
			if(inH >= 0 && inH <= 9){
				itemH = zero + inH;
				document.getElementById('min').focus();
			}
			else{
				itemH = inH; 
				document.getElementById('min').focus();
			}
		}
		else{
			alert("Input invalid");
			document.getElementById('hr').value = "";
		}
		
  var inM = document.getElementById('min').value;
  var itemM = inM;
	
	
		if(inM >= 0 && inM <= 59){
			if(inM >= 0 && inM <= 9){
				itemM = zero + inM;
				document.getElementById('add').focus();
			}
			else{
				itemM = inM; 
				document.getElementById('add').focus();
			}
		}
		else{
			alert("Input invalid");
			document.getElementById('min').value = "";
		}
	
  
  if((inH >= 0 && inH <= 23)&&(inM >= 0 && inM <= 59)){
	  var del = " : ";
	  var time = itemH + del + itemM;
	  var li = document.createElement("li");
	  var inputValue = time;
	  var t = document.createTextNode(inputValue);
	  li.appendChild(t);
	  if (inputValue === '') {
		alert("You must write something!");
	  } else {
		document.getElementById("timeIn").appendChild(li);
	  }
	  document.getElementById("hr").value = "";
	  document.getElementById("min").value = "";

	  var span = document.createElement("SPAN");
	  var txt = document.createTextNode("\u00D7");
	  span.className = "close";
	  span.appendChild(txt);
	  li.appendChild(span);

	  for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
		  var div = this.parentElement;
		  div.style.display = "none";
		}
	  }
	  document.getElementById('hr').focus();
	}
 
} 

function timeOut() {
  var inH = document.getElementById('hr').value;
  var zero = "0";
  var itemH = inH;
		
		if(inH >= 0 && inH <= 23){
			if(inH >= 0 && inH <= 9){
				itemH = zero + inH;
				document.getElementById('min').focus();
			}
			else{
				itemH = inH; 
				document.getElementById('min').focus();
			}
		}
		else{
			alert("Input invalid");
			document.getElementById('hr').value = "";
		}
		
  var inM = document.getElementById('min').value;
  var itemM = inM;
	
	
		if(inM >= 0 && inM <= 59){
			if(inM >= 0 && inM <= 9){
				itemM = zero + inM;
				document.getElementById('add').focus();
			}
			else{
				itemM = inM; 
				document.getElementById('add').focus();
			}
		}
		else{
			alert("Input invalid");
			document.getElementById('min').value = "";
		}
	
  
  if((inH >= 0 && inH <= 23)&&(inM >= 0 && inM <= 59)){
	  var del = " : ";
	  var time = itemH + del + itemM;
	  var li = document.createElement("li");
	  var inputValue = time;
	  var t = document.createTextNode(inputValue);
	  li.appendChild(t);
	  if (inputValue === '') {
		alert("You must write something!");
	  } else {
		document.getElementById("timeOut").appendChild(li);
	  }
	  document.getElementById("hr").value = "";
	  document.getElementById("min").value = "";

	  var span = document.createElement("SPAN");
	  var txt = document.createTextNode("\u00D7");
	  span.className = "close";
	  span.appendChild(txt);
	  li.appendChild(span);

	  for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
		  var div = this.parentElement;
		  div.style.display = "none";
		}
	  }
	  document.getElementById('hr').focus();
	}
 
} 