function showDialog(id){
	$("#dialogBg" + id).style.display = "block";
	$("#dialog" + id).style.display = "block";
}
	
function exitDlg(id){
	$("#dialogBg" + id).style.display = "none";
	$("#dialog" + id).style.display = "none";
}