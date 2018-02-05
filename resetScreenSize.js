/*
	随屏幕窗口调整,自动调整页面比例功能
	-------------------------------

	@el 根元素
	@width 宽度
	@height 高度
*/

function resetScreenSize (el, width, height) {

	let init = ()=> {

		let _el = document.getElementById(el);
		let hScale = window.innerHeight / height;
		let wScale = window.innerWidth  / width;

		_el.style.transform = 'scaleX(' + wScale +') scaleY(' + hScale + ')'
	}

	let lazyFun;

	window.onresize = ()=> {

		clearTimeout(lazyFun);

		lazyFun = setTimeout(()=> {

			init()

		}, 600)
	}
	 
	init()
}

export default resetScreenSize;