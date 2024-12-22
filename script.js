function route1(){
	const arrow1 = document.getElementById("arr1");
	
	arrow1.object3D.rotation.set(Math.PI / 2, 0, Math.PI / 4);
}

window.onload = () => {
	const marker1 = document.getElementById('animated-marker1');
	
	
	pujs.popup(title = 'Try Input Something', message = 'This is a sample alert box<br>with an input element.', buttons = [{ 'text': 'Action', callback: (value) => { setTimeout(()=>{console.log(value);pujs.alert(JSON.stringify(value), 'success')},1) } },{ 'text': 'Cancel', callback: () => { }, color: 'var(--pu-red)' }], 'vert',  [{placeholder: 'Try type something'}, {placeholder: 'Hidden Text', type: 'password'}])

};