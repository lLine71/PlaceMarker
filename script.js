
window.onload = () => {
	const marker1 = document.getElemntById('animated-marker1');
	const arrow1 = document.querySelector("arr1");
	
	arrow1.object3D.rotation.set(THREE.MathUtils.degToRad(15), THREE.MathUtils.degToRad(30), THREE.MathUtils.degToRad(90));
	alert('hopeitrotated')
};