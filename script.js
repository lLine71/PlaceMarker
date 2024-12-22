function router(value){
	const arrow1 = document.getElementById("arr1");
	
	if (value == '1'){
		alert('Rotated');
		arrow1.object3D.rotation.set(Math.PI / 2, 0, Math.PI / 4);
	}
	
}
    
window.onload = () => {
	//const marker1 = document.getElementById('animated-marker1');
	
	
	pujs.popup(title = 'Введите место назначения', 
	message = '', 
	buttons = [{ 'text': 'Ввод', callback: (value) => {router(value)} },
	{ 'text': 'Отмена', callback: () => { }, color: 'var(--pu-red)' }], 
	'vert', [{placeholder: ''}])
};