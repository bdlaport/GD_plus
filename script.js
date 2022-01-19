function commentBox(){
	const name=document.getElementById('name').value;
	const comment=document.getElementById('comment').value;
 
	if(name =="" || comment ==""){
		alert("Porfavor introduce la informacion requerida!");
	}else{
		const parent=document.createElement('div');
		const el_name=document.createElement('h5');
		const el_message=document.createElement('p');
		const el_line=document.createElement('hr');
		const txt_name=document.createTextNode(name);
		const txt_message=document.createTextNode(comment);
		el_name.appendChild(txt_name);
		el_message.appendChild(txt_message);
		el_line.style.border='1px solid #000';
		parent.appendChild(el_name);
		parent.appendChild(el_line);
		parent.appendChild(el_message);
		parent.setAttribute('class', 'pane');
		document.getElementById('result').appendChild(parent);
 
		document.getElementById('name').value="";
		document.getElementById('comment').value="";
	}
 
}
