
function addItem(){
	var itemH = document.getElementById('hr').value;
	var itemM = document.getElementById('min').value;
	var del = " : ";
	var time = itemH + del + itemM;
	
	alert(time);
	$("ol").append( '<li>' + time + '</li>' );
}