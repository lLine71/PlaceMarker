import * as THREE from 'three'

window.onload = () => {
	const marker1 = document.getElementById('animated-marker1');
	const arrow1 = document.getElementById("arr1");
	
	arrow1.object3D.rotation.set(THREE.MathUtils.degToRad(15), THREE.MathUtils.degToRad(30), THREE.MathUtils.degToRad(90));
	
	pujs.popup(title = 'Choose your destination', message = '', 
	buttons = [{ 'text': 'Action', callback: (value) => { 
	setTimeout(()=>{console.log(value); pujs.alert(JSON.stringify(value), 'success')},1) } },{ 'text': 'Cancel', 
	callback: () => { }, color: 'var(--pu-red)' }], 'vert', [{placeholder: 'Try type something'}, {placeholder: 
	'Hidden Text', type: 'password'}])

};