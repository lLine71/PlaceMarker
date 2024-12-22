function router(value){
	const arrow1 = document.getElementById("arr1");
	
	if (value == '1'){
		alert('Rotated');
		arrow1.object3D.rotation.set(Math.PI / 2, 0, Math.PI / 4);
	}
	
}
window.onload = () => {
	document.addEventListener("DOMContentLoaded", function() {
		var element = document.createElement("button");
		element.appendChild(document.createTextNode("Click Me!"));
		element.addEventListener("click", popup, false);
		 
		var page = document.getElementById("btn");
		let text = document.createTextNode("Button");
		element.appendChild(text);
		page.appendChild(element);
		 
		console.log(element);
	});
};
function popup(){
	pujs.popup(title = 'Введите место назначения', 
		message = '', 
		buttons = [{ 'text': 'Ввод', callback: (value) => {router(value)} },
		{ 'text': 'Отмена', callback: () => { }, color: 'var(--pu-red)' }], 
		'vert', [{placeholder: ''}])
}

	//const marker1 = document.getElementById('animated-marker1');
	
	
	
//};