function router(value){
	const arrow1 = document.getElementById("arr1");
	const arrow2 = document.getElementById("arr2");
	const arrow3 = document.getElementById("arr3");
	const arrow4 = document.getElementById("arr4");
	
	if (value == 'Маршрут1'){
		arrow1.object3D.rotation.set(Math.PI / 2, 0, - 3*(Math.PI / 4));
		arrow2.object3D.rotation.set(Math.PI / 2, 0, 3*(Math.PI / 4));
		arrow3.object3D.rotation.set(Math.PI / 2, 0, (Math.PI / 4));
		arrow4.object3D.rotation.set(Math.PI / 2, 0, -(Math.PI / 4));
	}
	if (value == 'Маршрут2'){
		arrow1.object3D.rotation.set(Math.PI / 2, 0, - 3*(Math.PI / 4) + Math.PI);
		arrow2.object3D.rotation.set(Math.PI / 2, 0, 3*(Math.PI / 4) + Math.PI);
		arrow3.object3D.rotation.set(Math.PI / 2, 0, (Math.PI / 4) + Math.PI);
		arrow4.object3D.rotation.set(Math.PI / 2, 0, -(Math.PI / 4) + Math.PI);
	}
	if (value == 'Маршрут0'){
		arrow1.object3D.rotation.set(0, 0 ,0);
		arrow2.object3D.rotation.set(0, 0 ,0);
		arrow3.object3D.rotation.set(0, 0 ,0);
		arrow4.object3D.rotation.set(0, 0 ,0);
	}
	
}

//document.addEventListener("DOMContentLoaded", function() {
	//var element = document.createElement("button");
	//element.appendChild(document.createTextNode("Click Me!"));
	//element.addEventListener("click", popup, false);
		 
	//var page = document.getElementById("btn");
	//let text = document.createTextNode("Button");
	//element.appendChild(text);
	//page.appendChild(element);
		 
	//console.log(element);
	
//};

function popup(){
	pujs.popup(title = 'Введите место назначения', 
		message = '', 
		buttons = [{ 'text': 'Ввод', callback: (value) => {router(value)} },
		{ 'text': 'Отмена', callback: () => { }, color: 'var(--pu-red)' }], 
		'vert', [{placeholder: ''}])
}

document.addEventListener("DOMContentLoaded", function() {
	element = document.getElementById("scene");
	element.addEventListener('touchend', (event) => {popup()});
});
 
	//const marker1 = document.getElementById('animated-marker1');
	
	
	
//};